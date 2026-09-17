import { NextResponse } from "next/server";

import {
  markCalendarEventHandled,
  verifyHandledAction,
} from "../google-calendar";

function htmlPage(title: string, message: string, status = 200) {
  return new Response(
    `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <style>
    body{margin:0;font-family:Inter,Arial,sans-serif;background:#F6F9FC;color:#252224;display:grid;place-items:center;min-height:100vh;padding:24px}
    main{max-width:560px;background:#fff;border:1px solid #D9E8F3;border-radius:12px;padding:32px;box-shadow:0 18px 50px rgba(3,22,58,.12)}
    h1{font-family:Georgia,serif;color:#0D274A;margin:0 0 12px;font-size:2rem}
    p{line-height:1.55;margin:0;color:#564F4D}
  </style>
</head>
<body><main><h1>${title}</h1><p>${message}</p></main></body>
</html>`,
    {
      status,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
    },
  );
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const eventId = url.searchParams.get("event")?.trim() || "";
  const token = url.searchParams.get("token")?.trim() || "";

  if (!eventId || !token || !verifyHandledAction(eventId, token)) {
    return htmlPage(
      "Lien invalide",
      "Ce lien de traitement n’est pas valide ou n’est plus utilisable.",
      403,
    );
  }

  try {
    const event = await markCalendarEventHandled(eventId);

    if (event.htmlLink) {
      return NextResponse.redirect(event.htmlLink, 302);
    }

    return htmlPage(
      "Demande traitée",
      "La demande est maintenant marquée comme traitée dans l’agenda de Stéphanie.",
    );
  } catch {
    return htmlPage(
      "Mise à jour impossible",
      "La demande n’a pas pu être marquée comme traitée. Vérifiez la connexion Google Agenda avant de réessayer.",
      500,
    );
  }
}
