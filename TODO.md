# TODO — Motion site Orbit

- [x] Landing page responsiva do Orbit — apresentar o app como espaço social de descobertas de filmes, séries, animes, livros e música/álbuns, com identidade de carvão `#201D19`, creme `#F4EFE7`/`#FDFBF7`, dourado `#E8C554` e tipografia Inter; adaptar a desktop e mobile.
- [x] Cena orbital ampliada — incluir múltiplas órbitas tridimensionais e vários corpos/partículas (“átomos”) movendo-se em velocidades e direções diferentes; manter o símbolo Orbit reconhecível e priorizar movimento visível sem sacrificar desempenho. Evidência: hero Three.js com quatro trajetórias inclinadas e treze corpos em velocidades/direções distintas; órbitas decorativas CSS adicionais e animações desligadas com `prefers-reduced-motion`.
- [x] Hero com o OrbitMark — ponto dourado gira ao redor do círculo; o movimento principal deve funcionar mesmo sem WebGL, respeitando `prefers-reduced-motion`.
- [x] Seção de avaliações culturais — comunicar notas de 0 a 10, opinião e escolhas de visibilidade pública, só amigos ou privada, sem atribuir recursos não documentados.
- [x] Seção de descoberta e amizade — apresentar os fluxos documentados e explicar amizade bidirecional por pedido e aceite, sem linguagem de seguidores.
- [x] Estado real do produto — anunciar apenas recursos documentados como implementados; não apresentar funções pendentes como disponíveis nem afirmar validação ao vivo do Supabase ou em aparelhos físicos.
- [x] Deploy do GitHub Pages — build Vite publicado via GitHub Actions em `kinhoob/orbit-website`, com assets relativos para o subcaminho `/orbit-website/`.
