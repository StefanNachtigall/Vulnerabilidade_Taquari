export default function MapaPage() {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <iframe
        title="Mapa de vulnerabilidade"
        src="/map/index.html"
        style={{ border: 0, height: '100%', width: '100%' }}
      />
    </main>
  );
}
