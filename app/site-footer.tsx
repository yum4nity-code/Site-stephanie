"use client";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>© {new Date().getFullYear()} Stéphanie Recorda — Conseil RH &amp; Paie</p>
        <nav aria-label="Informations légales">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/confidentialite">Confidentialité / RGPD</a>
          <a href="/conditions-utilisation">Conditions d’utilisation</a>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-privacy-settings"))}
          >
            Gérer les cookies
          </button>
        </nav>
      </div>
    </footer>
  );
}
