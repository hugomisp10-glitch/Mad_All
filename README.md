# Madeira — Guia da Viagem (12–15 nov 2026)

App web para o grupo (12 pessoas): roteiro, mapa 3D e ilustrado, restaurantes, planeamento e despesas.

## Publicar no GitHub Pages
1. Criem um repositório novo no GitHub (por exemplo `madeira-guia`).
2. Carreguem **todos** os ficheiros desta pasta (`index.html`, `sw.js`, `.nojekyll`, `README.md` e a pasta `audio/`).
3. Em *Settings → Pages*, escolham *Deploy from a branch*, ramo `main`, pasta `/ (root)`.
4. Ao fim de 1–2 minutos o guia fica em `https://O-VOSSO-UTILIZADOR.github.io/madeira-guia/`.
5. No telemóvel, abram o link e usem *Adicionar ao ecrã inicial*.

## Notas
- Funciona também a abrir `index.html` no computador, mas o mapa e a previsão precisam de internet.
- O modo offline (service worker) só funciona em `https`, ou seja, no GitHub Pages.
- As marcações, as notas e as despesas ficam guardadas no aparelho de cada pessoa (localStorage).
- Fotos: Wikimedia Commons (CC BY-SA). Mapas: OpenFreeMap / OpenStreetMap.
