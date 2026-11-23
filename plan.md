# Plano — Motion site do Orbit

## Objetivo
Manter um site de apresentação responsivo e imersivo para o Orbit, app social de descobertas culturais. Preservar o ritmo visual e a identidade existente: carvão `#201D19`, painéis creme `#F4EFE7` e `#FDFBF7`, dourado `#E8C554`, tipografia Inter e marca circular com ponto dourado em órbita.

## Produto e conteúdo
- Manter o título do hero “O que você descobre fica.” e explicar logo abaixo que o Orbit reúne filmes, séries, animes, livros e música em um só perfil e ajuda a descobrir novidades pelos gostos dos amigos.
- Comunicar avaliações de 0 a 10, opinião e visibilidade configurável (pública, só amigos ou privada), sem anunciar recursos não documentados.
- Descrever o modelo correto de amizade: pedido e aceite, sem seguidores.
- Não anunciar como existentes o mural social com avaliações reais de pessoas, Daily, XP, loja, conquistas ou moderação. Não afirmar validação do Supabase ao vivo ou em iPhone/Android.
- Não inserir data nem prometer acesso imediato. CTA de inscrição/cadastro e de download não se aplica; manter chamada editorial e links para os repositórios somente no rodapé.
- **Sem coleta de email e sem Supabase, conforme instrução vigente do usuário:** não implementar formulário, cadastro, armazenamento, captura ou campo de email.
- Criar a arte própria de prévia social em exatamente 1200 × 630 e incluir metadados Open Graph/Twitter no HTML inicial com URLs absolutas em `https://kinhoob.github.io/orbit-website/`.
- Remover símbolos/emoji decorativos; padronizar iconografia com `lucide-react` sem alterar a paleta ou o minimalismo do projeto.

## Direção visual e motion
Usar a identidade documentada: carvão `#201D19`, painéis creme `#F4EFE7` e `#FDFBF7`, dourado `#E8C554`, tipografia Inter e marca circular creme com ponto dourado em órbita. Três órbitas elípticas em CSS no hero, com seis satélites visíveis, em velocidades e sentidos variados; manter o OrbitMark e seu ponto dourado claros também em desktop, sem WebGL ou canvas. Distribuir três átomos soltos e discretos por seção ao longo da página para acompanhar a rolagem; suspender animações das seções fora da tela. Evitar usar capas não licenciadas como se fossem capas oficiais. Usar ícones lucide-react consistentes no lugar de símbolos decorativos; respeitar `prefers-reduced-motion`.

Coreografia: entrada curta do símbolo e título; órbitas e partículas com movimento contínuo e legível usando transformações CSS suaves; revelação progressiva das seções ao rolar; microinteração demonstrativa da nota de 0 a 10; transições discretas entre blocos. Variar sentidos e ritmos das órbitas para dar profundidade sem competir com o símbolo. Pausar partículas decorativas fora da área visível. Manter conteúdo e navegação utilizáveis sem animação, além de toque, telas pequenas e desempenho.

## Implementação
- Projeto Web em `/home/ubuntu/erasmotion`, com a aplicação e Preview existentes.
- Frontend leve em TypeScript com React/Vite; visual orbital, satélites e partículas em CSS; IntersectionObserver pausa partículas decorativas fora da viewport.
- Sem backend, autenticação ou banco; não utilizar Supabase. Não coletar nem armazenar emails.
- `public/manus-routes.json` declara as rotas existentes (inicialmente apenas `/`).
- Metadados e arte própria de prévia social permanecem no código/`public/`, com URL canônica de GitHub Pages.
- `TODO.md` rastreia os resultados deste escopo e deixa não implementado o item de email por solicitação vigente.

## Estrutura do projeto
- `src/`: aplicação React, seções da landing page e estilos.
- `public/`: manifesto de rotas, favicons e imagem social estática.
- `index.html`: metadados públicos presentes já no HTML inicial.
- `plan.md` e `TODO.md`: plano e estado das entregas.
