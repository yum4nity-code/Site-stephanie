import { createHmac, timingSafeEqual } from "node:crypto";

type CalendarCredentials = {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  calendarId: string;
};

export type PendingCalendarInput = {
  name: string;
  company: string;
  phone: string;
  email: string;
  context: string;
  need: string;
  callbackDate: string;
  callbackPeriod: string;
  message: string;
};

export type CalendarEventResult = {
  id: string;
  htmlLink: string | null;
};

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_CALENDAR_API = "https://www.googleapis.com/calendar/v3";

function getCredentials(): CalendarCredentials | null {
  const clientId = process.env.GOOGLE_CALENDAR_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CALENDAR_CLIENT_SECRET?.trim();
  const refreshToken = process.env.GOOGLE_CALENDAR_REFRESH_TOKEN?.trim();

  if (!clientId || !clientSecret || !refreshToken) return null;

  return {
    clientId,
    clientSecret,
    refreshToken,
    calendarId: process.env.GOOGLE_CALENDAR_ID?.trim() || "primary",
  };
}

function pendingColorId() {
  return process.env.GOOGLE_CALENDAR_PENDING_COLOR_ID?.trim() || "6";
}

function handledColorId() {
  return process.env.GOOGLE_CALENDAR_HANDLED_COLOR_ID?.trim() || "10";
}

function nextDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

function getSiteOrigin(request: Request) {
  const configured = process.env.SITE_URL?.trim();
  if (configured) {
    try {
      return new URL(configured).origin;
    } catch {
      // Fall back to the request origin if SITE_URL is malformed.
    }
  }

  return new URL(request.url).origin;
}

async function getAccessToken(credentials: CalendarCredentials) {
  const body = new URLSearchParams({
    client_id: credentials.clientId,
    client_secret: credentials.clientSecret,
    refresh_token: credentials.refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("google_calendar_token_failed");
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("google_calendar_token_missing");
  }

  return data.access_token;
}

function eventUrl(calendarId: string, eventId?: string) {
  const calendar = encodeURIComponent(calendarId);
  return eventId
    ? `${GOOGLE_CALENDAR_API}/calendars/${calendar}/events/${encodeURIComponent(eventId)}`
    : `${GOOGLE_CALENDAR_API}/calendars/${calendar}/events`;
}

export function isGoogleCalendarConfigured() {
  return Boolean(getCredentials());
}

export async function createPendingCalendarEvent(
  input: PendingCalendarInput,
): Promise<CalendarEventResult | null> {
  const credentials = getCredentials();
  if (!credentials) return null;

  const accessToken = await getAccessToken(credentials);
  const description = [
    `Sujet : ${input.context}`,
    `Besoin : ${input.need}`,
    `Créneau souhaité : ${input.callbackPeriod}`,
    `Prospect : ${input.name}`,
    `Entreprise : ${input.company || "Non renseignée"}`,
    `Téléphone : ${input.phone}`,
    `E-mail : ${input.email}`,
    input.message ? `Message : ${input.message}` : "Message : aucun",
    "",
    "Statut : NOUVELLE DEMANDE — à traiter.",
    "Pour passer l’événement en vert, utiliser le lien « Ouvrir / marquer traitée » reçu dans la notification du site.",
  ].join("\n");

  const response = await fetch(`${eventUrl(credentials.calendarId)}?sendUpdates=none`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      summary: `[À TRAITER] Rappel — ${input.name}`,
      description,
      start: { date: input.callbackDate },
      end: { date: nextDate(input.callbackDate) },
      transparency: "transparent",
      colorId: pendingColorId(),
      extendedProperties: {
        private: {
          source: "stephanie-recorda-site",
          callbackStatus: "pending",
          requesterEmail: input.email,
          callbackPeriod: input.callbackPeriod,
          context: input.context,
        },
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("google_calendar_create_failed");
  }

  const event = (await response.json()) as { id?: string; htmlLink?: string };
  if (!event.id) {
    throw new Error("google_calendar_event_id_missing");
  }

  return {
    id: event.id,
    htmlLink: event.htmlLink || null,
  };
}

export async function deleteCalendarEvent(eventId: string) {
  const credentials = getCredentials();
  if (!credentials) return;

  const accessToken = await getAccessToken(credentials);
  await fetch(`${eventUrl(credentials.calendarId, eventId)}?sendUpdates=none`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });
}

function statusSecret() {
  return process.env.CALLBACK_STATUS_SECRET?.trim() || "";
}

function signEvent(eventId: string) {
  const secret = statusSecret();
  if (!secret) return null;

  return createHmac("sha256", secret)
    .update(`callback-handled:${eventId}`)
    .digest("hex");
}

export function buildHandledActionUrl(request: Request, eventId: string) {
  const token = signEvent(eventId);
  if (!token) return null;

  const url = new URL("/api/callback/status", getSiteOrigin(request));
  url.searchParams.set("event", eventId);
  url.searchParams.set("token", token);
  return url.toString();
}

export function verifyHandledAction(eventId: string, token: string) {
  const expected = signEvent(eventId);
  if (!expected || !token) return false;

  const expectedBuffer = Buffer.from(expected, "utf8");
  const tokenBuffer = Buffer.from(token, "utf8");
  if (expectedBuffer.length !== tokenBuffer.length) return false;

  return timingSafeEqual(expectedBuffer, tokenBuffer);
}

export async function markCalendarEventHandled(eventId: string): Promise<CalendarEventResult> {
  const credentials = getCredentials();
  if (!credentials) {
    throw new Error("google_calendar_not_configured");
  }

  const accessToken = await getAccessToken(credentials);
  const currentResponse = await fetch(eventUrl(credentials.calendarId, eventId), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!currentResponse.ok) {
    throw new Error("google_calendar_event_read_failed");
  }

  const current = (await currentResponse.json()) as {
    summary?: string;
    htmlLink?: string;
    extendedProperties?: { private?: Record<string, string> };
  };

  const summary = current.summary?.startsWith("[À TRAITER]")
    ? current.summary.replace("[À TRAITER]", "[TRAITÉE]")
    : current.summary || "[TRAITÉE] Demande de rappel";

  const response = await fetch(`${eventUrl(credentials.calendarId, eventId)}?sendUpdates=none`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      summary,
      colorId: handledColorId(),
      extendedProperties: {
        private: {
          ...(current.extendedProperties?.private || {}),
          callbackStatus: "handled",
          handledAt: new Date().toISOString(),
        },
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("google_calendar_event_update_failed");
  }

  const event = (await response.json()) as { id?: string; htmlLink?: string };
  return {
    id: event.id || eventId,
    htmlLink: event.htmlLink || current.htmlLink || null,
  };
}
