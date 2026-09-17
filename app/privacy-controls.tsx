"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "stephanie-recorda-analytics-consent-v1";
type Consent = "granted" | "denied" | null;

export default function PrivacyControls() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!measurementId) {
      setReady(true);
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
    }
    setReady(true);

    function reopenPreferences() {
      setConsent(null);
    }

    window.addEventListener("open-privacy-settings", reopenPreferences);
    return () => window.removeEventListener("open-privacy-settings", reopenPreferences);
  }, [measurementId]);

  function choose(value: Exclude<Consent, null>) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }

  if (!measurementId || !ready) return null;

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { anonymize_ip: true });`}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <aside className="privacy-banner" aria-label="Préférences de confidentialité">
          <div className="privacy-banner-copy">
            <strong>Mesure d’audience</strong>
            <p>
              Avec votre accord, des statistiques de fréquentation peuvent être utilisées pour
              améliorer le site. Vous pouvez accepter ou refuser sans modifier l’accès au site.
            </p>
            <a href="/confidentialite">En savoir plus</a>
          </div>
          <div className="privacy-banner-actions">
            <button type="button" className="privacy-choice privacy-choice-secondary" onClick={() => choose("denied")}>
              Refuser
            </button>
            <button type="button" className="privacy-choice privacy-choice-primary" onClick={() => choose("granted")}>
              Accepter
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
