import { NextResponse } from "next/server";

import {
  markCalendarEventHandled,
  verifyHandledAction,
} from "../google-calendar";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function htmlPage(title: string, body: string, status = 200) {
  return new Response(
    `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <style>
    body{margin:0;font-family:Inter,Arial,sans-serif;background:#F6F9FC;color:#252224;display:grid;place-items:center;min-height:100vh;padding:24px}
    main{width:min(100%,560px);box-sizing:border-box;background:#fff;border:1px solid #D9E8F3;border-radius:12px;padding:32px;box-shadow:0 18px 50px rgba(3,22,58,.12)}
    h1{font-family:Georgia,serif;color:#0D274A;margin:0 0 12px;font-size:2rem}
    p{line-height:1.55;margin:0 0 22px;color:#564F4D}
    button{width:100%;min-height:48px;border:0;border-radius:7px;background:#0D274A;color:#fff;font:700 15px Inter,Arial,sans-serif;cursor:pointer;padding:0 18px}
  </style>
</head>
<body><main><h1>${escapeHtml(title)}</h1>${body}</main></body>
</html>`,
    {
      status,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
    },
  );
}

function invalidLink() {
  return htmlPage(
    "Lien invalide",
    "<p>Ce lien de traitement n’est pas valide ou n’est plus utilisable.</p>",
    403,
  );
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const eventId = url.searchParams.get("event")?.trim() || "";
  const token = url.searchParams.get("token")?.trim() || "";

  if (!eventId || !token || !verifyHandledAction(eventId, token)) {
    return invalidLink();
  }

  return htmlPage(
    "Demande à traiter",
    `<p>L’événement est encore orange. Appuyez sur le bouton pour le passer en vert et ouvrir Google Agenda.</p>
<form method="post">
  <input type="hidden" name="event" value="${escapeHtml(eventId)}" />
  <input type="hidden" name="token" value="${escapeHtml(token)}" />
  <button type="submit">Marquer traitée et ouvrir l’agenda</button>
</form>`,
  );
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const eventId = String(formData.get("event") || "").trim();
  const token = String(formData.get("token") || "").trim();

  if (!eventId || !token || !verifyHandledAction(eventId, token)) {
    return invalidLink();
  }

  try {
    const event = await markCalendarEventHandled(eventId);

    if (event.htmlLink) {
      return NextResponse.redirect(event.htmlLink, 303);
    }

    return htmlPage(
      "Demande traitée",
      "<p>La demande est maintenant marquée comme traitée dans l’agenda de Stéphanie.</p>",
    );
  } catch {
    return htmlPage(
      "Mise à jour impossible",
      "<p>La demande n’a pas pu être marquée comme traitée. Vérifiez la connexion Google Agenda avant de réessayer.</p>",
      500,
    );
  }
}
