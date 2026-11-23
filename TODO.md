# TODO — Motion site Orbit

- [x] Landing page responsiva do Orbit — apresentar o app como espaço social de descobertas de filmes, séries, animes, livros e música num perfil, com identidade de carvão `#201D19`, creme `#F4EFE7`/`#FDFBF7`, dourado `#E8C554` e tipografia Inter; adaptar a desktop e mobile.
- [x] Motion leve e visível também no PC — reduzir um pouco o número de bolinhas orbitais, suavizar as animações e adicionar mais átomos soltos para completar o design durante a rolagem. Evidência: removidos Three.js/WebGL e o canvas; três trajetórias CSS com seis satélites claramente visíveis no hero, mais três átomos decorativos em cada uma de quatro seções. As partículas de cada seção só animam enquanto ela está visível; `prefers-reduced-motion` continua respeitado.
- [x] Hero com o OrbitMark — ponto dourado gira ao redor do círculo; o movimento principal deve funcionar mesmo sem WebGL, respeitando `prefers-reduced-motion`.
- [x] Seção de avaliações culturais — comunicar notas de 0 a 10, opinião e escolhas de visibilidade pública, só amigos ou privada, sem atribuir recursos não documentados.
- [x] Seção de descoberta e amizade — apresentar os fluxos documentados e explicar amizade bidirecional por pedido e aceite, sem linguagem de seguidores.
- [x] Estado real do produto — anunciar apenas recursos documentados como implementados; não apresentar funções pendentes como disponíveis nem afirmar validação ao vivo do Supabase ou em aparelhos físicos.
- [x] Copy do hero — manter o título “O que você descobre fica.” e deixar explícito logo abaixo que o Orbit reúne filmes, séries, animes, livros e música em um perfil e ajuda a descobrir novidades pelos gostos dos amigos.
- [x] Prévia social — criar imagem própria de exatamente 1200 × 630 px, armazenada em `public/orbit-social.png`; incluir metadados `og:title`, `og:description`, `og:image` e `twitter:card` no HTML inicial, usando URLs absolutas sob `https://kinhoob.github.io/orbit-website/`.
- [x] Divulgação e ícones — não colocar data nem prometer acesso imediato; não manter CTA de inscrição ou download; mover links para GitHub ao rodapé; substituir símbolos decorativos e ícones improvisados por ícones consistentes de `lucide-react`, preservando estilo minimalista e paleta atuais.
- [ ] Cadastro e e-mail — **não implementar a pedido da instrução vigente**; não criar formulário, cadastro, coleta ou armazenamento de emails e não usar Supabase.
- [x] Build de produção — `pnpm build` concluído com sucesso; `public/orbit-social.png` também está no output como `dist/orbit-social.png` e foi validada em 1200 × 630 px.
- [ ] Publicação — integrar as alterações na branch `main` de `kinhoob/orbit-website` após verificar o estado remoto, sem force push.
