import { NextResponse } from "next/server";

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

function clean(value: unknown, maxLength = 500) {
  return String(value ?? "").trim().slice(0, maxLength);
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
      return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "delivery_unavailable" }, { status: 502 });
  }
}
