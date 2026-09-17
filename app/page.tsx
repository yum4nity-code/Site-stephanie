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
    details: [
      {
        title: "Paie & DSN",
        text: "Établissement complet des bulletins sous Silae, télétransmission DSN, suivi des absences et variables.",
      },
      {
        title: "Administration RH",
        text: "DPAE, contrats, avenants, soldes de tout compte et affiliations mutuelle / prévoyance.",
      },
      {
        title: "Conseil dirigeant",
        text: "Assistance sur les questions réglementaires et la gestion RH du quotidien.",
      },
    ],
    cta: "Échanger sur cette formule",
  },
  {
    name: "Pack PME Performance",
    audience: "11 à 25 salariés",
    price: "1 190 € HT / mois",
    featured: true,
    badge: "Le plus complet",
    items: ["Gestion globale RH & Paie", "Suivi des talents", "Présence terrain"],
    details: [
      {
        title: "Gestion globale RH & Paie",
        text: "Traitement de la paie, déclarations sociales et administration du personnel.",
      },
      {
        title: "Suivi des talents",
        text: "Entretiens annuels, fiches de poste et suivi de la formation.",
      },
      {
        title: "Présence terrain",
        text: "Demi-journée mensuelle sur site, conseil organisationnel et appui au dirigeant.",
      },
    ],
    cta: "Échanger sur cette formule",
  },
  {
    name: "Pack Sur-Mesure",
    audience: "+25 salariés / multi-sites",
    price: "Sur devis",
    featured: false,
    items: ["Volume adapté", "Accompagnement évolutif", "Présence selon les besoins"],
    details: [
      {
        title: "Volume adapté",
        text: "Ajustement du volume d’heures et de la présence sur site selon la complexité et les besoins organisationnels.",
      },
      {
        title: "Accompagnement personnalisé",
        text: "Une organisation évolutive construite avec l’entreprise.",
      },
      {
        title: "Devis selon votre contexte",
        text: "Effectif, multi-sites, conventions collectives, volume de paie, saisonnalité, complexité administrative et fréquence de présence peuvent être pris en compte.",
      },
    ],
    cta: "Demander une estimation",
  },
];

const expertiseServices = [
  {
    name: "Diagnostic RH & Organisation du Travail",
    price: "350 à 400 € HT / jour",
    description:
      "Diagnostic terrain des dysfonctionnements, structuration des process RH et accompagnement à la mise en place de nouvelles pratiques.",
    details: [
      "Diagnostic terrain des dysfonctionnements organisationnels.",
      "Structuration de process RH et de politiques internes.",
      "Accompagnement à la mise en place de nouvelles pratiques.",
    ],
    cta: "Demander un diagnostic",
  },
  {
    name: "Audit Qualiopi & Conformité CFA / OF",
    price: "400 € HT / jour",
    description:
      "Préparation et suivi des audits Qualiopi sur le volet RH / administratif, avec structuration du suivi des apprenants et formateurs.",
    details: [
      "Préparation et suivi des audits Qualiopi sur le volet RH / administratif.",
      "Structuration du suivi administratif des apprenants et formateurs.",
    ],
    cta: "Me parler de cette mission",
  },
  {
    name: "Sous-traitance Paie",
    price: "22 à 28 € HT / bulletin",
    description:
      "Prise en charge de portefeuilles clients sous Silae et renfort opérationnel lors des pics d’activité des cabinets comptables.",
    details: [
      "Prise en charge de portefeuilles clients sous Silae.",
      "Renfort opérationnel lors des pics d’activité.",
    ],
    cta: "Me parler de cette mission",
  },
];

const aboutProofs = [
  {
    title: "15 ans d’expérience RH",
    detail: "Une pratique complète du cycle RH et de la paie.",
  },
  {
    title: "11 ans dans l’Armée de Terre",
    detail: "Expérience de terrain, organisation et gestion de situations exigeantes.",
  },
  {
    title: "Spécialiste paie Silae",
    detail: "Maîtrise opérationnelle de la paie et des obligations associées.",
  },
  {
    title: "210 à 350 personnes",
    detail: "Gestion RH d’unités de taille significative.",
  },
];

function contactHref(subject: string) {
  return `mailto:stephanie.recorda1@gmail.com?subject=${encodeURIComponent(subject)}`;
}

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
              <a className="hero-email" href="mailto:stephanie.recorda1@gmail.com">
                <span className="contact-icon" aria-hidden="true">✉</span>
                stephanie.recorda1@gmail.com
              </a>
            </div>

            <div className="hero-actions">
              <a className="button button-primary hero-contact-cta" href="#contact">
                Prendre rendez-vous
              </a>
              <a className="button button-secondary hero-offers-cta" href="#offres">
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

                <details className="offer-details">
                  <summary className="detail-trigger">Voir le détail</summary>
                  <div className="detail-panel">
                    <ul className="detail-list">
                      {offer.details.map((detail) => (
                        <li key={detail.title}>
                          <strong>{detail.title}</strong>
                          <span>{detail.text}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      className="button button-primary detail-cta"
                      href={contactHref(`${offer.name} — demande d’échange`)}
                    >
                      {offer.cta}
                    </a>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-section" id="expertise" aria-labelledby="expertise-title">
        <div className="section-inner">
          <p className="section-kicker">Un appui ciblé pour vos enjeux spécifiques</p>
          <h2 className="section-title" id="expertise-title">
            Prestations ponctuelles &amp; missions d’expertise
          </h2>
          <span className="section-accent" aria-hidden="true" />

          <div className="expertise-grid">
            {expertiseServices.map((service) => (
              <article className="expertise-card" key={service.name}>
                <h3>{service.name}</h3>
                <p className="expertise-price">{service.price}</p>
                <p className="expertise-description">{service.description}</p>

                <details className="expertise-details">
                  <summary className="detail-trigger">Voir le détail</summary>
                  <div className="detail-panel">
                    <ul className="detail-list detail-list-simple">
                      {service.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <a
                      className="button button-primary detail-cta"
                      href={contactHref(`${service.name} — demande d’information`)}
                    >
                      {service.cta}
                    </a>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" id="a-propos" aria-labelledby="about-title">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-heading">
              <p className="section-kicker">À propos</p>
              <h2 className="section-title" id="about-title">
                Une expertise terrain au service de vos ambitions
              </h2>
              <span className="section-accent" aria-hidden="true" />
            </div>

            <div className="about-copy">
              <p>
                Stéphanie dispose d’environ 15 ans d’expérience RH, dont 11 ans dans
                l’Armée de Terre, avec la gestion de l’ensemble du cycle RH d’unités
                allant d’environ 210 à 350 personnes.
              </p>
              <p>
                Son parcours couvre l’administration du personnel, la paie, les carrières,
                les entretiens annuels, les contrats et avenants, les situations
                disciplinaires ou conflictuelles, l’organisation du travail et
                l’accompagnement de dirigeants et de structures de formation.
              </p>
            </div>

            <div className="about-proof" aria-label="Repères du parcours">
              {aboutProofs.map((proof) => (
                <div className="about-proof-item" key={proof.title}>
                  <span className="about-proof-mark" aria-hidden="true">✓</span>
                  <div>
                    <strong>{proof.title}</strong>
                    <span>{proof.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
