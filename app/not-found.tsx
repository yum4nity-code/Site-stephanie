export default function NotFound() {
  return (
    <main className="not-found-shell">
      <section className="not-found-card" aria-labelledby="not-found-title">
        <p className="section-kicker">Erreur 404</p>
        <h1 id="not-found-title">Cette page n’existe pas.</h1>
        <p>
          Le lien est peut-être ancien ou incomplet. Revenez à l’accueil pour retrouver les offres et les
          coordonnées de Stéphanie.
        </p>
        <a className="button button-primary" href="/">
          Retour à l’accueil
        </a>
      </section>
    </main>
  );
}
