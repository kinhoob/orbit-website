# Plano — Motion site do Orbit

## Objetivo
Criar um site de apresentação responsivo e imersivo para o Orbit, app social de descobertas culturais. O site seguirá o ritmo visual e a interatividade da referência compartilhada, mas com identidade própria do Orbit e sem reaproveitar a marca Eras Label.

## Produto e conteúdo
- Apresentar o Orbit como app social de descobertas culturais: filmes, séries, animes, livros e música/álbuns.
- Explicar o diferencial com avaliações de 0 a 10, opinião e visibilidade configurável (pública, só amigos ou privada).
- Descrever o modelo correto de amizade: pedido e aceite, sem seguidores.
- Mostrar funções já presentes no guia: explorar, busca, obra e avaliação, biblioteca/coleções/perfil e navegação.
- Não anunciar como existentes o mural social com avaliações reais de pessoas, Daily, XP, loja, conquistas ou moderação. Não afirmar validação do Supabase ao vivo ou em iPhone/Android. Informar, se houver espaço, que a validação remota e física ainda está pendente.
- CTA sem prometer cadastro, download ou lista de espera inexistente; usar links informativos para o repositório e uma ação de conhecer o app.

## Direção visual e motion
Usar a identidade documentada no PDF: carvão `#201D19`, painéis creme `#F4EFE7` e `#FDFBF7`, dourado `#E8C554`, tipografia Inter e marca circular creme com ponto dourado em órbita. Criar uma peça hero procedural em Three.js inspirada no OrbitMark, com quatro trajetórias 3D inclinadas em planos distintos e treze partículas/átomos em velocidades e sentidos diferentes. Acrescentar órbitas decorativas em CSS como camada independente, para que o movimento principal continue claro mesmo sem suporte WebGL. Evitar usar capas não licenciadas como se fossem capas oficiais.

Coreografia: entrada curta do símbolo e título; órbitas e partículas com movimento contínuo e legível, associado ao cursor em desktop; revelação progressiva das seções ao rolar; microinteração demonstrativa da nota de 0 a 10; transições discretas entre blocos. Variar sentidos e ritmos das órbitas para dar profundidade sem competir com o símbolo. Respeitar `prefers-reduced-motion`, manter conteúdo e navegação utilizáveis sem animação, e otimizar para toque, telas pequenas e desempenho.

## Implementação
- Projeto Web gerenciado em `/home/ubuntu/erasmotion`, aproveitando o projeto recém-inicializado e sua Preview; os arquivos ainda estão vazios.
- Frontend leve em TypeScript com React/Vite conforme estrutura que existir ou for selecionada após inspeção; Three.js para a visualização do hero, CSS para transições e layout.
- Sem backend, autenticação ou banco: o site é uma apresentação pública, não altera o app Orbit nem seu repositório.
- Incluir `public/manus-routes.json` com as rotas que existirem (inicialmente apenas `/`).
- Incluir manifesto de dependências e comandos reproduzíveis, configuração de metadados e configuração necessária de ícone/logo usando asset estável adequado.

## Estrutura prevista
- `src/`: aplicação, componentes de seções, estilos e utilitário de animação reduzida.
- `src/components/`: hero 3D, navegação, demonstração da nota, seções editoriais e CTA.
- `public/`: manifesto de rotas e assets estáticos próprios.
- `plan.md` e `TODO.md`: plano aprovado e entregas com critérios explícitos.
