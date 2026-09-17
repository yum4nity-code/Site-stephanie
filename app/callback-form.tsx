"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";

type CallbackButtonProps = {
  children?: ReactNode;
  className?: string;
  context?: string;
};

type RequestStatus = "idle" | "sending" | "success" | "error";

type CallbackResponse = {
  ok?: boolean;
  calendarUrl?: string;
  googleCalendarUrl?: string;
  emailConfirmationSent?: boolean;
  newsletterSubscribed?: boolean;
  error?: string;
};

type CallbackSummary = {
  context: string;
  need: string;
  callbackDate: string;
  callbackPeriod: string;
  email: string;
  calendarUrl: string;
  googleCalendarUrl: string;
  emailConfirmationSent: boolean;
};

function getLocalDateValue() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

function formatCallbackDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return value;

  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

export function CallbackButton({
  children = "Prendre rendez-vous",
  className = "button button-primary",
  context = "Prise de rendez-vous",
}: CallbackButtonProps) {
  return (
    <button
      className={className}
      type="button"
      onClick={() => {
        window.dispatchEvent(
          new CustomEvent("open-callback-dialog", { detail: { context } }),
        );
      }}
    >
      {children}
    </button>
  );
}

export default function CallbackDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [context, setContext] = useState("Prise de rendez-vous");
  const [status, setStatus] = useState<RequestStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const [minimumDate, setMinimumDate] = useState("");
  const [summary, setSummary] = useState<CallbackSummary | null>(null);

  useEffect(() => {
    setMinimumDate(getLocalDateValue());

    function openDialog(event: Event) {
      const customEvent = event as CustomEvent<{ context?: string }>;
      setContext(customEvent.detail?.context || "Prise de rendez-vous");
      setStatus("idle");
      setFeedback("");
      setSummary(null);
      dialogRef.current?.showModal();
    }

    window.addEventListener("open-callback-dialog", openDialog);
    return () => window.removeEventListener("open-callback-dialog", openDialog);
  }, []);

  function closeDialog() {
    dialogRef.current?.close();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      context,
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      need: String(formData.get("need") || ""),
      callbackDate: String(formData.get("callbackDate") || ""),
      callbackPeriod: String(formData.get("callbackPeriod") || ""),
      message: String(formData.get("message") || ""),
      newsletter: formData.get("newsletter") === "yes",
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as CallbackResponse;

      if (!response.ok || !data.ok || !data.calendarUrl || !data.googleCalendarUrl) {
        throw new Error(data.error || "request_failed");
      }

      setSummary({
        context,
        need: payload.need,
        callbackDate: payload.callbackDate,
        callbackPeriod: payload.callbackPeriod,
        email: payload.email,
        calendarUrl: data.calendarUrl,
        googleCalendarUrl: data.googleCalendarUrl,
        emailConfirmationSent: Boolean(data.emailConfirmationSent),
      });
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setFeedback(
        "L’envoi n’a pas abouti. Vous pouvez réessayer ou appeler Stéphanie au 06.50.73.88.92.",
      );
    }
  }

  return (
    <dialog
      className="callback-dialog"
      ref={dialogRef}
      aria-labelledby="callback-title"
      aria-describedby="callback-description"
      onCancel={() => setStatus("idle")}
    >
      <div className="callback-dialog-inner">
        <button
          className="callback-close"
          type="button"
          onClick={closeDialog}
          aria-label="Fermer la demande de rappel"
        >
          ×
        </button>

        {status === "success" && summary ? (
          <div className="callback-success-screen" role="status" aria-live="polite">
            <span className="callback-success-mark" aria-hidden="true">✓</span>
            <p className="callback-success-kicker">Demande envoyée</p>
            <h2 id="callback-title">Votre demande est bien partie.</h2>
            <p className="callback-success-lead" id="callback-description">
              Stéphanie a reçu votre demande. Le créneau reste à confirmer : elle vous
              recontactera pour valider l’échange.
            </p>

            <dl className="callback-success-summary">
              <div>
                <dt>Sujet</dt>
                <dd>{summary.context}</dd>
              </div>
              <div>
                <dt>Jour souhaité</dt>
                <dd>{formatCallbackDate(summary.callbackDate)}</dd>
              </div>
              <div>
                <dt>Créneau</dt>
                <dd>{summary.callbackPeriod}</dd>
              </div>
              <div>
                <dt>Besoin</dt>
                <dd>{summary.need}</dd>
              </div>
            </dl>

            <p className="callback-success-email">
              {summary.emailConfirmationSent ? (
                <>✉ Une confirmation vient d’être envoyée à {summary.email}.</>
              ) : (
                <>✉ Stéphanie utilisera {summary.email} pour confirmer définitivement le créneau.</>
              )}
            </p>

            <div className="callback-calendar-block">
              <strong>Garder cette demande dans votre agenda</strong>
              <p>
                L’événement est ajouté comme <b>« à confirmer »</b> : il ne bloque pas un
                rendez-vous définitif tant que Stéphanie ne l’a pas validé.
              </p>
              <div className="callback-calendar-actions">
                <a
                  className="button button-primary"
                  href={summary.googleCalendarUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ajouter à Google Agenda
                </a>
                <a className="button button-secondary" href={summary.calendarUrl}>
                  Autre agenda (.ics)
                </a>
              </div>
            </div>

            <button className="callback-success-close" type="button" onClick={closeDialog}>
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="callback-heading">
              <p className="callback-kicker">Un échange simple, sans agenda imposé</p>
              <h2 id="callback-title">Demander à être rappelé</h2>
              <p id="callback-description">
                Indiquez vos coordonnées et votre créneau de préférence. Il s’agit d’une demande
                de rappel : Stéphanie vous recontacte pour confirmer l’échange.
              </p>
              {context !== "Prise de rendez-vous" ? (
                <p className="callback-context">Sujet : {context}</p>
              ) : null}
            </div>

            <form className="callback-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="callback-fields callback-fields-two">
                <label>
                  <span>Nom et prénom *</span>
                  <input name="name" autoComplete="name" required />
                </label>
                <label>
                  <span>Entreprise</span>
                  <input name="company" autoComplete="organization" />
                </label>
              </div>

              <div className="callback-fields callback-fields-two">
                <label>
                  <span>Téléphone *</span>
                  <input name="phone" type="tel" autoComplete="tel" required />
                </label>
                <label>
                  <span>E-mail *</span>
                  <input name="email" type="email" autoComplete="email" required />
                </label>
              </div>

              <label>
                <span>Votre besoin principal *</span>
                <select name="need" required defaultValue="">
                  <option value="" disabled>
                    Choisir un besoin
                  </option>
                  <option>Paie & DSN</option>
                  <option>Administration RH</option>
                  <option>Paie + RH</option>
                  <option>Organisation / accompagnement dirigeant</option>
                  <option>Diagnostic RH</option>
                  <option>Audit Qualiopi / CFA / OF</option>
                  <option>Sous-traitance paie</option>
                  <option>Autre / à préciser</option>
                </select>
              </label>

              <fieldset className="callback-slot">
                <legend>Quand souhaitez-vous être rappelé ? *</legend>
                <div className="callback-fields callback-fields-two">
                  <label>
                    <span>Jour souhaité</span>
                    <input name="callbackDate" type="date" min={minimumDate} required />
                  </label>
                  <label>
                    <span>Créneau de préférence</span>
                    <select name="callbackPeriod" required defaultValue="">
                      <option value="" disabled>
                        Choisir un créneau
                      </option>
                      <option>Matin</option>
                      <option>Pause déjeuner</option>
                      <option>Après-midi</option>
                      <option>Fin de journée</option>
                      <option>Je suis flexible</option>
                    </select>
                  </label>
                </div>
                <p className="callback-help">
                  Le créneau est une préférence de rappel, pas une réservation automatique.
                </p>
              </fieldset>

              <label>
                <span>Un détail à ajouter ?</span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Ex. reprise d’un dossier paie, besoin urgent de structurer les RH…"
                />
              </label>

              <label className="callback-check">
                <input name="newsletter" type="checkbox" value="yes" />
                <span>
                  Je souhaite recevoir ponctuellement les conseils RH &amp; Paie de Stéphanie.
                  Cette inscription est facultative et séparée de ma demande de rappel.
                </span>
              </label>

              <label className="callback-check callback-check-required">
                <input name="contactConsent" type="checkbox" required />
                <span>J’accepte d’être recontacté(e) au sujet de cette demande. *</span>
              </label>

              <div className="callback-honeypot" aria-hidden="true">
                <label>
                  Site web
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <p className="callback-privacy">
                Vos coordonnées sont utilisées pour traiter cette demande. Le consentement aux
                conseils RH &amp; Paie n’est jamais coché par défaut.
              </p>

              <div className="callback-actions">
                <button
                  className="button button-primary callback-submit"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Envoi…" : "Envoyer ma demande de rappel"}
                </button>
                <button className="callback-cancel" type="button" onClick={closeDialog}>
                  Annuler
                </button>
              </div>

              {feedback ? (
                <p className="callback-feedback callback-feedback-error" role="alert">
                  {feedback}
                </p>
              ) : null}
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
