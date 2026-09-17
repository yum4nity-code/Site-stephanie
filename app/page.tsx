import Image from "next/image";

function PayrollIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.7 2.7 8 7 10 4.3-2 7-5.3 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function StructureIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 4h12v16H6z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  );
}

function PreventionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="m15 9-2 4-4 2 2-4 4-2Z" />
    </svg>
  );
}

function HumanIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 19c.8-3.2 2.7-5 5.5-5s4.7 1.8 5.5 5" />
      <path d="M4 12h2M18 12h2" />
    </svg>
  );
}

const offers = [
  {
    name: "Pack TPE Sérénité",
    audience: "5 à 10 salariés",
    price: "690 € HT / mois",
    featured: false,
    items: ["Paie & DSN", "Administration RH", "Conseil dirigeant"],
  },
  {
    name: "Pack PME Performance",
    audience: "11 à 25 salariés",
    price: "1 190 € HT / mois",
    featured: true,
    badge: "Le plus complet",
    items: ["Gestion globale RH & Paie", "Suivi des talents", "Présence terrain"],
  },
  {
    name: "Pack Sur-Mesure",
    audience: "+25 salariés / multi-sites",
    price: "Sur devis",
    featured: false,
    items: ["Volume adapté", "Accompagnement évolutif", "Présence selon les besoins"],
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Navigation principale">
        <a className="brand" href="#accueil" aria-label="Stéphanie Recorda — Accueil">
          <span className="brand-name">Stéphanie Recorda</span>
          <span className="brand-tagline">
            <span className="brand-line" aria-hidden="true" />
            Conseil RH &amp; Paie <span aria-hidden="true">|</span> TPE • PME
          </span>
        </a>

        <nav className="main-nav" aria-label="Sections du site">
          <a href="#accueil">Accueil</a>
          <a href="#offres">Offres</a>
          <a href="#expertise">Expertise</a>
          <a href="#a-propos">À propos</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button-primary header-cta" href="#contact">
          Prendre rendez-vous
        </a>
      </header>

      <section className="hero" id="accueil" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Externaliser • Sécuriser • Avancer ensemble</p>

            <h1 id="hero-title">
              Expertise RH &amp; Paie
              <br />
              externalisée pour
              <br />
              TPE et PME
            </h1>

            <div className="hero-proof" aria-label="Repères d’expertise">
              <p>15 ans d’expérience RH • Spécialiste paie Silae</p>
              <p>Vision globale &amp; prévention des risques RH</p>
            </div>

            <div className="hero-contact" aria-label="Coordonnées">
              <span>
                <span className="contact-icon" aria-hidden="true">●</span>
                Strasbourg &amp; Bas-Rhin
              </span>
              <a href="tel:+33650738892">
                <span className="contact-icon" aria-hidden="true">☎</span>
                06.50.73.88.92
              </a>
              <a href="mailto:stephanie.recorda1@gmail.com">
                <span className="contact-icon" aria-hidden="true">✉</span>
                stephanie.recorda1@gmail.com
              </a>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Prendre rendez-vous
              </a>
              <a className="button button-secondary" href="#offres">
                Découvrir mes offres
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-frame">
              <Image
                src="/images/stephanie-recorda-portrait-professionnel.webp"
                alt="Portrait professionnel de Stéphanie Recorda"
                width={600}
                height={750}
                priority
                sizes="(max-width: 900px) 92vw, 42vw"
              />
            </div>

            <blockquote className="hero-quote">
              « Des ressources humaines plus humaines, au service de la performance durable. »
            </blockquote>
          </div>
        </div>
      </section>

      <section className="benefits" aria-label="Les bénéfices de l’accompagnement">
        <div className="benefits-inner" role="list">
          <article className="benefit" role="listitem">
            <span className="benefit-icon"><PayrollIcon /></span>
            <div>
              <h2>Fiabilisez votre paie</h2>
              <p>Des processus fiables et conformes</p>
            </div>
          </article>

          <article className="benefit" role="listitem">
            <span className="benefit-icon"><StructureIcon /></span>
            <div>
              <h2>Structurez vos démarches RH</h2>
              <p>Des outils et méthodes adaptés à votre réalité</p>
            </div>
          </article>

          <article className="benefit" role="listitem">
            <span className="benefit-icon"><PreventionIcon /></span>
            <div>
              <h2>Anticipez vos risques RH</h2>
              <p>Une vision globale et préventive</p>
            </div>
          </article>

          <article className="benefit" role="listitem">
            <span className="benefit-icon"><HumanIcon /></span>
            <div>
              <h2>Flexible &amp; humain</h2>
              <p>Sur site ou à distance, selon vos besoins</p>
            </div>
          </article>
        </div>
      </section>

      <section className="offers-section" id="offres" aria-labelledby="offers-title">
        <div className="section-inner">
          <p className="section-kicker">Des solutions adaptées à votre taille et à vos enjeux</p>
          <h2 className="section-title" id="offers-title">Offres forfaitaires récurrentes</h2>
          <span className="section-accent" aria-hidden="true" />

          <div className="offers-grid">
            {offers.map((offer) => (
              <article
                className={`offer-card${offer.featured ? " offer-card-featured" : ""}`}
                key={offer.name}
              >
                {offer.badge ? <span className="offer-badge">{offer.badge}</span> : null}
                <div className="offer-heading">
                  <h3>{offer.name}</h3>
                  <p>{offer.audience}</p>
                </div>
                <p className="offer-price">{offer.price}</p>
                <ul className="offer-list">
                  {offer.items.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="offer-detail-placeholder" aria-hidden="true">
                  Détail de l’offre à l’étape suivante
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
