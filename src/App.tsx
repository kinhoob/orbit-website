import { useEffect, useState } from 'react';
import { Apple, ArrowUpRight, BookOpen, Film, Headphones, Menu, Smartphone, Sparkles, Tv, X } from 'lucide-react';

const categories = [
  { name: 'Filmes', icon: Film, color: '#d78562' },
  { name: 'Séries', icon: Tv, color: '#8395cf' },
  { name: 'Animes', icon: Sparkles, color: '#c87591' },
  { name: 'Livros', icon: BookOpen, color: '#779b75' },
  { name: 'Música', icon: Headphones, color: '#c09a47' },
];

const orbitalTracks = [
  { name: 'inner', atoms: ['gold', 'pale'] },
  { name: 'middle', atoms: ['pale', 'gold'] },
  { name: 'outer', atoms: ['coral', 'gold'] },
] as const;

function OrbitScene() {
  return <div className="orbit-scene" aria-label="Órbitas e partículas do Orbit" role="img">
    {orbitalTracks.map(({ name, atoms }) => <div className={`scene-orbit scene-orbit--${name}`} key={name} aria-hidden="true">
      <div className="scene-orbit__spin">{atoms.map((color, index) => <i className={`scene-atom scene-atom--${color} scene-atom--point-${index + 1}`} key={`${name}-${color}-${index}`} />)}</div>
    </div>)}
  </div>;
}

function AmbientAtoms({ variant }: { variant: string }) {
  return <div className={`ambient-atoms ambient-atoms--${variant}`} aria-hidden="true">
    <i className="ambient-atom ambient-atom--one" /><i className="ambient-atom ambient-atom--two" /><i className="ambient-atom ambient-atom--three" />
  </div>;
}

function App() {
  const [score, setScore] = useState(8);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal, .ambient-atoms');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { nodes.forEach((node) => { if (node.classList.contains('reveal')) node.classList.add('visible'); }); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      const target = entry.target as HTMLElement;
      if (target.classList.contains('ambient-atoms')) { target.classList.toggle('is-in-view', entry.isIntersecting); return; }
      if (entry.isIntersecting) { target.classList.add('visible'); observer.unobserve(target); }
    }), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <>
    <header className="topbar"><a className="wordmark" href="#inicio" aria-label="Orbit — início"><span className="orbit-mark"><i /></span><span>orbit</span></a><nav className={menuOpen ? 'nav open' : 'nav'}><a onClick={() => setMenuOpen(false)} href="#descobrir">Descobrir</a><a onClick={() => setMenuOpen(false)} href="#avaliar">Avaliar</a><a onClick={() => setMenuOpen(false)} href="#juntos">Com amigos</a><a className="nav-cta" onClick={() => setMenuOpen(false)} href="https://github.com/kinhoob/orbit" target="_blank" rel="noreferrer">Acompanhe o projeto <ArrowUpRight size={15} /></a></nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button></header>
    <main id="inicio">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow"><span className="live-dot" /> CULTURA BOA CIRCULA</p><h1>O que você<br />descobre <em>fica.</em></h1><p className="hero-intro">Um lugar para descobrir filmes, séries, livros, animes e sons — e dividir o que valeu a pena com quem entende você.</p><div className="hero-downloads" aria-label="Downloads do app Orbit, em breve"><button className="download-badge" type="button" disabled><Apple size={20} /><span><small>EM BREVE NA</small><strong>App Store</strong></span></button><button className="download-badge" type="button" disabled><Smartphone size={20} /><span><small>EM BREVE NO</small><strong>Google Play</strong></span></button></div><div className="hero-meta"><span>DESCUBRA · AVALIE · COMPARTILHE</span><span>00 — 05</span></div></div>
        <div className="hero-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><OrbitScene /><div className="brand-orbit" aria-hidden="true"><span className="brand-orbit__ring"/><span className="brand-orbit__core"/><span className="brand-orbit__satellite"/></div><div className="orbit-note note-top"><span>SEU PRÓXIMO FAVORITO</span><strong>está por aí ↗</strong></div><div className="orbit-note note-bottom"><span>01 / CULTURA EM MOVIMENTO</span><strong>Orbit, em uma nova órbita.</strong></div><div className="grain" /></div>
        <div className="hero-side-label">UMA REDE DE GOSTOS EM COMUM <span>↘</span></div>
      </section>
      <section className="manifesto section-pad" id="descobrir"><AmbientAtoms variant="manifesto" /><div className="section-kicker reveal"><span>01</span><span>O UNIVERSO ORBIT</span></div><div className="manifesto-grid"><h2 className="reveal">Cada gosto abre<br />uma <em>órbita nova.</em></h2><div className="manifesto-body reveal"><p>Tem sempre uma história esperando para ser encontrada. No Orbit, cultura circula entre coisas que você gosta e pessoas que têm algo a acrescentar.</p><a className="text-link" href="#categorias">Explore o que cabe no seu universo <ArrowUpRight size={15} /></a></div></div><div className="category-strip reveal" id="categorias">{categories.map(({ name, icon: Icon, color }, i) => <div className="category" key={name} style={{ '--category': color } as React.CSSProperties}><span className="category-index">0{i + 1}</span><Icon size={22} strokeWidth={1.6} /><span>{name}</span><ArrowUpRight className="category-arrow" size={15} /></div>)}</div></section>
      <section className="rating-section section-pad" id="avaliar"><AmbientAtoms variant="rating" /><div className="section-kicker reveal"><span>02</span><span>GOSTO É PESSOAL. COMPARTILHAR TAMBÉM.</span></div><div className="rating-grid"><div className="rating-copy reveal"><h2>Uma nota.<br /><em>Seu ponto de vista.</em></h2><p>Dê uma nota de 0 a 10 e conte o que achou. Cada avaliação é sua — você escolhe quem pode ver.</p><div className="visibility"><span>VISIBILIDADE</span><span className="visibility-chip">◎ Pública</span><span className="visibility-chip">◉ Só amigos</span><span className="visibility-chip">◌ Privada</span></div></div><div className="rating-card reveal"><div className="card-top"><span>UMA AMOSTRA DO SEU GOSTO</span><span className="card-orbit">◉</span></div><div className="fiction-art"><div className="fiction-ring"/><div className="fiction-star">✳</div><span>UMA HISTÓRIA<br />CHAMA OUTRA</span></div><div className="fiction-info"><span className="fiction-type">OBRA · SUA AVALIAÇÃO</span><h3>O que fica com você?</h3><p>Uma história pode ser só sua. Ou virar conversa.</p></div><div className="score-label"><span>SUA NOTA</span><strong>{score.toFixed(1)}<small> / 10</small></strong></div><input aria-label="Escolher nota de 0 a 10" type="range" min="0" max="10" step="0.5" value={score} onChange={(event) => setScore(Number(event.target.value))} className="score-range" style={{ '--range': `${score * 10}%` } as React.CSSProperties} /><div className="range-labels"><span>0 — não rolou</span><span>10 — inesquecível</span></div></div></div></section>
      <section className="friends-section section-pad" id="juntos"><AmbientAtoms variant="friends" /><div className="section-kicker reveal"><span>03</span><span>GOSTOS QUE SE ENCONTRAM</span></div><div className="friends-grid"><div className="friends-art reveal"><div className="friend-orbit friend-orbit-a"/><div className="friend-orbit friend-orbit-b"/><div className="friend-core"><span>o</span></div><div className="friend-dot dot-a"><img src="./friends/orbit-friend-01.webp" alt="" loading="lazy" decoding="async" /></div><div className="friend-dot dot-b"><img src="./friends/orbit-friend-02.webp" alt="" loading="lazy" decoding="async" /></div><div className="friend-dot dot-c"><img src="./friends/orbit-friend-03.webp" alt="" loading="lazy" decoding="async" /></div><div className="friend-caption">DUAS ÓRBITAS. UM PAPO BOM.</div></div><div className="friends-copy reveal"><p className="eyebrow">NÃO É SEGUIR. É SE CONHECER.</p><h2>Descobertas<br />ficam melhores<br /><em>entre amigos.</em></h2><p>No Orbit, a amizade é dos dois lados. Envie um pedido, aceite o convite e descubram novas histórias juntos — cada um no seu ritmo.</p><a className="button button-cream" href="https://github.com/kinhoob/orbit" target="_blank" rel="noreferrer">Conheça o projeto <ArrowUpRight size={16} /></a></div></div></section>
      <section className="closing section-pad"><AmbientAtoms variant="closing" /><div className="closing-star">✳</div><p className="eyebrow reveal">CULTURA BOA CIRCULA.</p><h2 className="reveal">Siga o fio.<br /><em>Veja onde ele leva.</em></h2><a className="button button-light reveal" href="https://github.com/kinhoob/orbit" target="_blank" rel="noreferrer">Acompanhe a construção do Orbit <ArrowUpRight size={16} /></a><p className="closing-footnote">Orbit está em desenvolvimento. Algumas experiências ainda estão em construção.</p></section>
    </main>
    <footer className="footer"><a className="wordmark footer-mark" href="#inicio"><span className="orbit-mark"><i /></span><span>orbit</span></a><span>FEITO PARA DESCOBRIR O QUE VEM A SEGUIR.</span><a href="#inicio">VOLTAR AO TOPO ↑</a></footer>
  </>;
}

export default App;
