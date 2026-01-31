export default function HomePage() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ marginTop: 0 }}>Vulnerabilidade — Taquari</h1>
      <p>
        Este app Next.js serve o mapa existente (QGIS2Web/Leaflet) como conteúdo estático.
      </p>
      <p>
        <a href="/mapa">Abrir mapa</a>
      </p>
      <p style={{ opacity: 0.7, fontSize: 14 }}>
        Dica: o mapa original está em <code>/map/index.html</code> dentro de <code>public</code>.
      </p>
    </main>
  );
}
