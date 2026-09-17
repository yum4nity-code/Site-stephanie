import { createHash } from "node:crypto";

function clean(value: string | null, maxLength = 200) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function escapeIcs(value: string) {
  return value
    .replaceAll("\\", "\\\\")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .replace(/\r?\n/g, "\\n");
}

function compactDate(value: string) {
  return value.replaceAll("-", "");
}

function nextDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

function isValidDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const callbackDate = clean(url.searchParams.get("date"), 20);
  const callbackPeriod = clean(url.searchParams.get("period"), 80) || "Créneau à préciser";
  const context = clean(url.searchParams.get("context"), 200) || "Prise de rendez-vous";

  if (!isValidDate(callbackDate)) {
    return new Response("Date invalide", { status: 400 });
  }

  const start = compactDate(callbackDate);
  const end = compactDate(nextDate(callbackDate));
  const uid = createHash("sha256")
    .update(`${callbackDate}|${callbackPeriod}|${context}`)
    .digest("hex")
    .slice(0, 24);
  const now = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  const description = [
    `Sujet : ${context}`,
    `Créneau souhaité : ${callbackPeriod}`,
    "Statut : demande envoyée, horaire à confirmer par Stéphanie.",
    "Téléphone : 06.50.73.88.92",
    "E-mail : stephanie.recorda1@gmail.com",
  ].join("\n");

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Stephanie Recorda//Demande de rappel//FR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}@stephanie-recorda`,
    `DTSTAMP:${now}`,
    `DTSTART;VALUE=DATE:${start}`,
    `DTEND;VALUE=DATE:${end}`,
    `SUMMARY:${escapeIcs("Demande de rappel avec Stéphanie Recorda — à confirmer")}`,
    `DESCRIPTION:${escapeIcs(description)}`,
    "STATUS:TENTATIVE",
    "TRANSP:TRANSPARENT",
    "X-MICROSOFT-CDO-BUSYSTATUS:FREE",
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");

  return new Response(ics, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="demande-rappel-stephanie-recorda.ics"',
      "Cache-Control": "no-store",
    },
  });
}
