import { NextResponse } from "next/server";

import {
  attachHandledActionLink,
  buildHandledActionUrl,
  createPendingCalendarEvent,
  deleteCalendarEvent,
} from "./google-calendar";

type CallbackPayload = {
  context?: string;
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  need?: string;
  callbackDate?: string;
  callbackPeriod?: string;
  message?: string;
  newsletter?: boolean;
  website?: string;
};

const DESTINATION_EMAIL = "stephanie.recorda1@gmail.com";
const DESTINATION_NAME = "Stéphanie Recorda";

function clean(value: unknown, maxLength = 500) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function compactDate(value: string) {
  return value.replaceAll("-", "");
}

function nextDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

function buildGoogleCalendarUrl(callbackDate: string, callbackPeriod: string, context: string) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Demande de rappel avec Stéphanie Recorda — à confirmer",
    dates: `${compactDate(callbackDate)}/${compactDate(nextDate(callbackDate))}`,
    details: [
      `Sujet : ${context}`,
      `Créneau souhaité : ${callbackPeriod}`,
      "Statut : demande envoyée, horaire à confirmer par Stéphanie.",
      "Téléphone : 06.50.73.88.92",
      "E-mail : stephanie.recorda1@gmail.com",
    ].join("\n"),
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildCalendarUrl(request: Request, callbackDate: string, callbackPeriod: string, context: string) {
  const configuredOrigin = process.env.SITE_URL?.trim();
  const base = configuredOrigin || new URL(request.url).origin;
  const url = new URL("/api/callback/calendar", base);
  url.searchParams.set("date", callbackDate);
  url.searchParams.set("period", callbackPeriod);
  url.searchParams.set("context", context);
  return url.toString();
}

async function sendBrevoConfirmation(input: {
  email: string;
  name: string;
  context: string;
  callbackDate: string;
  callbackPeriod: string;
  calendarUrl: string;
  googleCalendarUrl: string;
}) {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
  const senderName = process.env.BREVO_SENDER_NAME?.trim() || DESTINATION_NAME;

  if (!apiKey || !senderEmail) return false;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { email: senderEmail, name: senderName },
      to: [{ email: input.email, name: input.name }],
      replyTo: { email: DESTINATION_EMAIL, name: DESTINATION_NAME },
      subject: "Votre demande de rappel — Stéphanie Recorda",
      htmlContent: `
        <div style="font-family:Arial,sans-serif;line-height:1.55;color:#252224;max-width:620px;margin:auto">
          <h1 style="font-family:Georgia,serif;color:#0D274A;font-size:30px">Votre demande a bien été reçue</h1>
          <p>Bonjour ${escapeHtml(input.name)},</p>
          <p>Votre demande de rappel a bien été transmise à Stéphanie Recorda.</p>
          <div style="background:#F1F8FE;border:1px solid #D9E8F3;border-radius:8px;padding:16px;margin:20px 0">
            <p style="margin:0 0 7px"><strong>Sujet :</strong> ${escapeHtml(input.context)}</p>
            <p style="margin:0 0 7px"><strong>Jour souhaité :</strong> ${escapeHtml(input.callbackDate)}</p>
            <p style="margin:0"><strong>Créneau :</strong> ${escapeHtml(input.callbackPeriod)}</p>
          </div>
          <p>Ce créneau est une préférence de rappel. Stéphanie vous recontactera pour confirmer l’échange.</p>
          <p>
            <a href="${escapeHtml(input.googleCalendarUrl)}" style="display:inline-block;background:#0D274A;color:#fff;text-decoration:none;padding:11px 15px;border-radius:6px;margin-right:8px">Ajouter à Google Agenda</a>
            <a href="${escapeHtml(input.calendarUrl)}" style="display:inline-block;color:#0D274A;text-decoration:none;padding:10px 14px;border:1px solid #0D274A;border-radius:6px">Autre agenda (.ics)</a>
          </p>
          <p style="font-size:13px;color:#564F4D">L’événement est marqué « à confirmer » et ne constitue pas encore un rendez-vous définitif.</p>
          <p style="margin-top:28px">Stéphanie Recorda<br>Conseil RH &amp; Paie<br>06.50.73.88.92</p>
        </div>
      `,
    }),
    cache: "no-store",
  });

  return response.ok;
}

async function subscribeBrevoContact(email: string, newsletter: boolean) {
  if (!newsletter) return false;

  const apiKey = process.env.BREVO_API_KEY?.trim();
  const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);
  if (!apiKey || !Number.isInteger(listId) || listId <= 0) return false;

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
    }),
    cache: "no-store",
  });

  return response.ok;
}

export async function POST(request: Request) {
  let payload: CallbackPayload;

  try {
    payload = (await request.json()) as CallbackPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without forwarding them.
  if (clean(payload.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const company = clean(payload.company, 160);
  const phone = clean(payload.phone, 60);
  const email = clean(payload.email, 180);
  const need = clean(payload.need, 180);
  const callbackDate = clean(payload.callbackDate, 20);
  const callbackPeriod = clean(payload.callbackPeriod, 80);
  const context = clean(payload.context, 200) || "Prise de rendez-vous";
  const message = clean(payload.message, 1500);
  const newsletter = Boolean(payload.newsletter);

  if (!name || !phone || !email || !need || !callbackDate || !callbackPeriod) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(callbackDate)) {
    return NextResponse.json({ error: "invalid_date" }, { status: 400 });
  }

  const calendarUrl = buildCalendarUrl(request, callbackDate, callbackPeriod, context);
  const googleCalendarUrl = buildGoogleCalendarUrl(callbackDate, callbackPeriod, context);

  let ownerCalendarEvent: { id: string; htmlLink: string | null } | null = null;
  let ownerHandledActionUrl: string | null = null;

  try {
    ownerCalendarEvent = await createPendingCalendarEvent({
      name,
      company,
      phone,
      email,
      context,
      need,
      callbackDate,
      callbackPeriod,
      message,
    });

    if (ownerCalendarEvent) {
      ownerHandledActionUrl = buildHandledActionUrl(request, ownerCalendarEvent.id);
      if (ownerHandledActionUrl) {
        await attachHandledActionLink(ownerCalendarEvent.id, ownerHandledActionUrl).catch(
          () => undefined,
        );
      }
    }
  } catch {
    // A Calendar outage or missing OAuth setup must never lose the lead.
    ownerCalendarEvent = null;
    ownerHandledActionUrl = null;
  }

  const submission = {
    _subject: `Nouvelle demande de rappel — ${context}`,
    _template: "table",
    _replyto: email,
    "Nom et prénom": name,
    Entreprise: company || "Non renseignée",
    Téléphone: phone,
    "E-mail": email,
    Sujet: context,
    "Besoin principal": need,
    "Jour souhaité": callbackDate,
    "Créneau de préférence": callbackPeriod,
    Message: message || "Aucun message complémentaire",
    "Conseils RH & Paie (opt-in)": newsletter ? "OUI" : "NON",
    "Google Agenda prospect — demande à confirmer": googleCalendarUrl,
    "Agenda universel prospect (.ics) — demande à confirmer": calendarUrl,
    "Agenda Stéphanie — état": ownerCalendarEvent
      ? "ORANGE — nouvelle demande à traiter"
      : "Non connecté ou événement non créé",
    "Agenda Stéphanie — ouvrir l’événement": ownerCalendarEvent?.htmlLink || "Non disponible",
    "Ouvrir / marquer traitée (orange → vert)":
      ownerHandledActionUrl || "Non configuré — CALLBACK_STATUS_SECRET requis",
    Source: "Site Stéphanie Recorda — formulaire de rappel",
  };

  try {
    const formSubmitResponse = await fetch(
      `https://formsubmit.co/ajax/${DESTINATION_EMAIL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submission),
        cache: "no-store",
      },
    );

    if (!formSubmitResponse.ok) {
      if (ownerCalendarEvent) {
        await deleteCalendarEvent(ownerCalendarEvent.id).catch(() => undefined);
      }
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    }

    const [emailConfirmationSent, newsletterSubscribed] = await Promise.all([
      sendBrevoConfirmation({
        email,
        name,
        context,
        callbackDate,
        callbackPeriod,
        calendarUrl,
        googleCalendarUrl,
      }).catch(() => false),
      subscribeBrevoContact(email, newsletter).catch(() => false),
    ]);

    return NextResponse.json({
      ok: true,
      calendarUrl,
      googleCalendarUrl,
      emailConfirmationSent,
      newsletterSubscribed,
      ownerCalendarCreated: Boolean(ownerCalendarEvent),
      ownerCalendarHandledLinkReady: Boolean(ownerHandledActionUrl),
    });
  } catch {
    if (ownerCalendarEvent) {
      await deleteCalendarEvent(ownerCalendarEvent.id).catch(() => undefined);
    }
    return NextResponse.json({ error: "delivery_unavailable" }, { status: 502 });
  }
}
