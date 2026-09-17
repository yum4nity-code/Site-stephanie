import { CallbackButton } from "./callback-form";

export default function ContactCta() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div>
          <p className="contact-kicker">Échangeons sur vos besoins</p>
          <h2 className="contact-title" id="contact-title">
            Parlons de vos besoins RH &amp; Paie
          </h2>
          <p className="contact-intro">
            Un premier échange pour faire le point sur votre situation et identifier les
            solutions adaptées.
          </p>
        </div>

        <div className="contact-details" aria-label="Coordonnées de Stéphanie Recorda">
          <a href="tel:+33650738892">
            <span className="contact-detail-icon" aria-hidden="true">☎</span>
            06.50.73.88.92
          </a>
          <a href="mailto:stephanie.recorda1@gmail.com">
            <span className="contact-detail-icon" aria-hidden="true">✉</span>
            stephanie.recorda1@gmail.com
          </a>
          <span>
            <span className="contact-detail-icon" aria-hidden="true">●</span>
            Strasbourg &amp; Bas-Rhin — sur site / à distance
          </span>
        </div>

        <CallbackButton className="button contact-cta">
          Prendre rendez-vous
        </CallbackButton>
      </div>
    </section>
  );
}
