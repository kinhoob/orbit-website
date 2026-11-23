# TODO — Motion site Orbit

- [x] Landing page responsiva do Orbit — apresentar o app como espaço social de descobertas de filmes, séries, animes, livros e música/álbuns, com identidade de carvão `#201D19`, creme `#F4EFE7`/`#FDFBF7`, dourado `#E8C554` e tipografia Inter; adaptar a desktop e mobile.
- [x] Motion leve e visível também no PC — reduzir um pouco o número de bolinhas orbitais, suavizar as animações e adicionar mais átomos soltos para completar o design durante a rolagem. Evidência: removidos Three.js/WebGL e o canvas; três trajetórias CSS com seis satélites claramente visíveis no hero, mais três átomos decorativos em cada uma de quatro seções. As partículas de cada seção só animam enquanto ela está visível; `prefers-reduced-motion` continua respeitado.
- [x] Hero com o OrbitMark — ponto dourado gira ao redor do círculo; o movimento principal deve funcionar mesmo sem WebGL, respeitando `prefers-reduced-motion`.
- [x] Seção de avaliações culturais — comunicar notas de 0 a 10, opinião e escolhas de visibilidade pública, só amigos ou privada, sem atribuir recursos não documentados.
- [x] Seção de descoberta e amizade — apresentar os fluxos documentados e explicar amizade bidirecional por pedido e aceite, sem linguagem de seguidores.
- [x] Estado real do produto — anunciar apenas recursos documentados como implementados; não apresentar funções pendentes como disponíveis nem afirmar validação ao vivo do Supabase ou em aparelhos físicos.
- [x] Deploy do GitHub Pages — build Vite publicado via GitHub Actions em `kinhoob/orbit-website`, com assets relativos para o subcaminho `/orbit-website/`.
