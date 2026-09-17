import Image from "next/image";

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
    </main>
  );
}
