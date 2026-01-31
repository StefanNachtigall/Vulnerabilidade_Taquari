# Next.js (Vercel)

Este diretório (`web/`) contém uma camada Next.js que **serve o mapa existente (QGIS2Web/Leaflet)** como conteúdo estático.

## Rodar local (requer Node.js)

```bash
cd web
npm install
npm run dev
```

- Home: `http://localhost:3000/`
- Mapa: `http://localhost:3000/mapa`

## Deploy na Vercel

1. No GitHub, faça push do branch `vercel-next`.
2. Na Vercel: **New Project → Import Git Repository**.
3. Em **Root Directory**, selecione `web`.
4. Deploy.

O mapa é servido de `public/map/index.html` e aberto via iframe na rota `/mapa`.
