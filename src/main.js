import './style.css';

const EMAIL_DESTINATION = 'elbotechia@gmail.com';
const EMAIL_API_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL_DESTINATION}`;

const newsItems = [
  { id: 'n1', title: 'Lanca monitoramento de ceu aberto', summary: 'Rede publica de observacao com dados em tempo real para escolas.', detail: 'A iniciativa conecta telescopios remotos e paines meteorologicos para permitir acompanhamento publico de fenomenos astronomicos e ambientais.' },
  { id: 'n2', title: 'Parceria com observatorio regional', summary: 'Programa de visitas tecnicas e oficinas mensais.', detail: 'As atividades combinam ciencia cidada, coleta de dados e treinamento de estudantes para analise de imagens e series temporais.' },
  { id: 'n3', title: 'Bolsa de iniciacao aberta', summary: 'Edital para pesquisadores em fase inicial.', detail: 'As bolsas contemplam analise de sinais biologicos em ambientes de baixa luminosidade e desenvolvimento de modelos preditivos.' },
  { id: 'n4', title: 'Jornada AstroMed confirma palestrantes', summary: 'Especialistas nacionais e internacionais no encontro anual.', detail: 'A jornada reunira mesas sobre etica de dados, visualizacao cientifica e extensao universitaria aplicada a saude e territorio.' },
  { id: 'n5', title: 'Nova estacao de coleta instalada', summary: 'Capacidade ampliada para sensores ambientais.', detail: 'O novo polo melhora a cobertura geoespacial e reduz lacunas de medicao em periodos de maior variabilidade climatica.' },
  { id: 'n6', title: 'Serie de seminarios comecou', summary: 'Conversas quinzenais com transmissao aberta.', detail: 'A serie traz estudos de caso sobre reproducibilidade, validacao de pipeline e interoperabilidade entre laboratorios.' },
  { id: 'n7', title: 'Laboratorio moveis em campo', summary: 'Unidade itinerante para comunidades escolares.', detail: 'A equipe leva kits de demonstracao, atividades praticas e orientacao sobre carreira cientifica para jovens de ensino medio.' },
  { id: 'n8', title: 'Guia de dados abertos publicado', summary: 'Padrao de catalogacao para o projeto.', detail: 'O documento orienta licencas, metadados minimos e politicas de versionamento para promover colaboracao segura.' },
  { id: 'n9', title: 'Hackathon interdisciplinar anunciado', summary: 'Desafios de software para pesquisa aplicada.', detail: 'O evento busca prototipos de dashboards, alertas e automacoes para acelerar a tomada de decisao em saude e ambiente.' },
];

const postItems = [
  { id: 'p1', title: 'Como desenhamos nosso pipeline', summary: 'Do sensor ao painel: arquitetura e validacao.', detail: 'Este artigo apresenta escolhas de stack, estrategia de testes e metricas de confiabilidade para um fluxo reproduzivel.' },
  { id: 'p2', title: 'Visualizacao que explica fenomenos', summary: 'Tecnicas para transformar dados em narrativa.', detail: 'Mostramos como combinar mapas, series e anotacoes sem perder contexto cientifico nem acessibilidade.' },
  { id: 'p3', title: 'Boas praticas para equipes mistas', summary: 'Integrando saude, computacao e educacao.', detail: 'Compartilhamos rituais de trabalho, cadencia de revisao e formas de reduzir atrito entre disciplinas.' },
  { id: 'p4', title: 'Licoes de campo', summary: 'O que aprendemos operando fora do laboratorio.', detail: 'Relatamos falhas reais de comunicacao, energia e transporte, e como cada problema foi mitigado no processo.' },
  { id: 'p5', title: 'Acessibilidade em plataformas cientificas', summary: 'Contraste, navegacao e leitura assistiva.', detail: 'A abordagem prioriza clareza de linguagem, estrutura semantica e navegacao por teclado em todas as interfaces.' },
  { id: 'p6', title: 'Versionamento de experimentos', summary: 'Rastreabilidade para analises confiaveis.', detail: 'Explicamos como amarrar codigo, dados e parametros para reproduzir resultados sem ambiguidades.' },
  { id: 'p7', title: 'Metodologia de avaliacao de impacto', summary: 'Indicadores para academia e comunidade.', detail: 'Definimos indicadores quantitativos e qualitativos para medir aprendizado, adocao de pratica e impacto territorial.' },
  { id: 'p8', title: 'Roadmap da plataforma 2026', summary: 'Proximos marcos tecnicos e de pesquisa.', detail: 'Entre os objetivos estao observabilidade ampliada, novos modulos de analise e trilhas de formacao abertas.' },
];

const podcastItems = [
  { id: 'pc1', title: 'Ep. 01 | Ciencia em linguagem clara', summary: 'Com equipe de extensao e divulgacao.', detail: 'Debate sobre traducao de achados cientificos para publico amplo sem perder rigor.', duration: '34 min' },
  { id: 'pc2', title: 'Ep. 02 | Dados que contam historias', summary: 'Convidado da visualizacao analitica.', detail: 'Conversa sobre narrativa visual aplicada a vigilancia em saude e ambiente.', duration: '41 min' },
  { id: 'pc3', title: 'Ep. 03 | Pesquisa colaborativa', summary: 'Integracao entre universidades.', detail: 'Como construir governanca de projetos interinstitucionais e compartilhamento de infraestrutura.', duration: '38 min' },
  { id: 'pc4', title: 'Ep. 04 | IA responsavel no laboratorio', summary: 'Modelos com controle e rastreio.', detail: 'Principios para uso de automacao em cenarios criticos com auditoria e transparencia.', duration: '29 min' },
  { id: 'pc5', title: 'Ep. 05 | Ensino e cultura maker', summary: 'Experiencias em oficinas abertas.', detail: 'Praticas para aprendizagem ativa, prototipacao e disseminacao de cultura cientifica local.', duration: '45 min' },
  { id: 'pc6', title: 'Ep. 06 | Futuro da plataforma', summary: 'Visao estrategica para proximos anos.', detail: 'Planejamento de escalabilidade, sustentabilidade e internacionalizacao do projeto.', duration: '32 min' },
];

const state = {
  news: { page: 1, perPage: 6, items: newsItems },
  posts: { page: 1, perPage: 6, items: postItems },
  podcasts: { page: 1, perPage: 4, items: podcastItems },
};

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="top-fixed">
    <div class="brand-wrap">
      <div class="logo-mark" aria-hidden="true">AM</div>
      <div>
        <strong>AstroMed Hub</strong>
        <p>Pesquisa, divulgacao e inovacao</p>
      </div>
    </div>
    <nav class="main-nav" aria-label="Navegacao principal">
      <a href="#landing">Landing</a>
      <a href="#about">About</a>
      <a href="#news">News</a>
      <a href="#posts">Posts</a>
      <a href="#podcasts">Podcasts</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="social-inline" aria-label="Redes sociais">
      <a href="#" aria-label="GitHub">GH</a>
      <a href="#" aria-label="LinkedIn">IN</a>
      <a href="#" aria-label="YouTube">YT</a>
      <a href="#" aria-label="Instagram">IG</a>
    </div>
  </header>

  <main>
    <section id="landing" class="hero-screen panel">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="kicker">Landing Page</p>
        <h1>Plataforma interdisciplinar para ciencia, saude e territorio</h1>
        <p class="lead">Uma SPA de pagina unica com secoes completas, navegacao fluida e foco em conteudo multimidia.</p>
        <div class="cta-row">
          <a class="cta primary" href="#about">Conheca o Projeto</a>
          <a class="cta" href="#news">Ir para News</a>
          <a class="cta" href="#posts">Ver Posts</a>
          <a class="cta" href="#podcasts">Ouvir Podcasts</a>
          <a class="cta" href="#contact">Fale Conosco</a>
        </div>
      </div>
    </section>

    <section class="panel highlights">
      <h2>Destaques</h2>
      <div class="highlight-grid">
        <article><h3>Pesquisa em rede</h3><p>Integramos dados, metodo cientifico e colaboracao com instituicoes parceiras.</p></article>
        <article><h3>Impacto social</h3><p>Levamos conhecimento para escolas, comunidades e ambientes de formacao.</p></article>
        <article><h3>Tecnologia aberta</h3><p>Construimos ferramentas com transparencia e reuso para diferentes cenarios.</p></article>
      </div>
    </section>

    <section class="panel gallery">
      <h2>Galeria</h2>
      <div class="gallery-grid">
        <figure><span>Laboratorio</span></figure>
        <figure><span>Campo</span></figure>
        <figure><span>Eventos</span></figure>
        <figure><span>Seminarios</span></figure>
        <figure><span>Oficinas</span></figure>
        <figure><span>Publicacoes</span></figure>
      </div>
    </section>

    <section class="panel mvv">
      <h2>Missao, Visao e Valores</h2>
      <div class="mvv-grid">
        <article><h3>Missao</h3><p>Produzir ciencia aplicada e acessivel, conectando pessoas, dados e territorio.</p></article>
        <article><h3>Visao</h3><p>Ser referencia em colaboracao interdisciplinar para inovacao com impacto publico.</p></article>
        <article><h3>Valores</h3><p>Etica, inclusao, rigor metodologico, abertura de conhecimento e responsabilidade social.</p></article>
      </div>
    </section>

    <section id="about" class="panel about">
      <div class="section-head">
        <p class="kicker">About</p>
        <h2>Sobre o projeto e o autor</h2>
      </div>
      <div class="about-grid">
        <article>
          <h3>Sobre o projeto</h3>
          <p>O AstroMed Hub e uma iniciativa para aproximar pesquisa academica, desenvolvimento web e divulgacao cientifica em uma experiencia digital unica.</p>
          <p>O foco e apresentar conteudos em formatos diferentes: noticias, artigos, podcasts e material institucional.</p>
        </article>
        <article>
          <h3>Sobre o autor</h3>
          <p>Pesquisador e desenvolvedor com atuacao em saude, analise de dados e design de sistemas web de comunicacao cientifica.</p>
          <p>Participa de grupos de extensao e redes colaborativas de ensino e pesquisa aplicada.</p>
        </article>
      </div>
      <div class="institution-logos" aria-label="Instituicoes academicas">
        <div class="logo-tile">UFX</div>
        <div class="logo-tile">LAB DATA</div>
        <div class="logo-tile">OBS MED</div>
        <div class="logo-tile">NUPESQ</div>
      </div>
    </section>

    <section id="news" class="panel listing">
      <div class="section-head">
        <p class="kicker">News</p>
        <h2>Noticias</h2>
      </div>
      <div id="newsCards" class="card-grid news-grid"></div>
      <div id="newsPager" class="pager"></div>
    </section>

    <section id="posts" class="panel listing">
      <div class="section-head">
        <p class="kicker">Posts</p>
        <h2>Publicacoes</h2>
      </div>
      <div id="postCards" class="card-grid post-grid"></div>
      <div id="postsPager" class="pager"></div>
    </section>

    <section id="podcasts" class="panel listing">
      <div class="section-head">
        <p class="kicker">Podcasts</p>
        <h2>Episodios em destaque</h2>
      </div>
      <div id="podcastCards" class="card-grid video-grid"></div>
      <div id="podcastsPager" class="pager"></div>
    </section>

    <section id="contact" class="panel contact">
      <div class="section-head">
        <p class="kicker">Contact</p>
        <h2>Fale com a equipe</h2>
      </div>
      <div class="contact-grid">
        <form id="contactForm" class="contact-form">
          <label for="name">Nome</label>
          <input id="name" name="name" type="text" placeholder="Seu nome" required>

          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="seuemail@exemplo.com" required>

          <label for="topic">Assunto</label>
          <input id="topic" name="topic" type="text" placeholder="Tema da mensagem" required>

          <label for="message">Mensagem</label>
          <textarea id="message" name="message" rows="5" placeholder="Escreva sua mensagem" required></textarea>

          <button type="submit">Enviar mensagem</button>
          <p id="contactFeedback" class="form-feedback" aria-live="polite"></p>
        </form>
        <aside class="contact-info">
          <h3>Outros meios de contato</h3>
          <p>Email institucional: ${EMAIL_DESTINATION}</p>
          <p>Telefone: +55 (11) 4000-0000</p>
          <p>Endereco: Campus Integrado de Pesquisa, Bloco C, Sala 204</p>
          <div class="social-inline contact-social" aria-label="Redes sociais no contato">
            <a href="#" aria-label="GitHub">GH</a>
            <a href="#" aria-label="LinkedIn">IN</a>
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </aside>
      </div>
    </section>
  </main>

  <footer class="footer-main">
    <div>
      <h3>Sitemap</h3>
      <ul class="sitemap">
        <li><a href="#landing">Landing</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#posts">Posts</a></li>
        <li><a href="#podcasts">Podcasts</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <form id="newsletterForm" class="mini-form">
      <h3>Receba novidades</h3>
      <p>Assine para receber atualizacoes e novos episodios.</p>
      <label for="newsletter" class="sr-only">Email</label>
      <input id="newsletter" name="email" type="email" placeholder="email@exemplo.com" required>
      <button type="submit">Assinar</button>
      <p id="newsletterFeedback" class="form-feedback" aria-live="polite"></p>
      <div class="social-inline footer-social" aria-label="Redes sociais no footer">
        <a href="#" aria-label="GitHub">GH</a>
        <a href="#" aria-label="LinkedIn">IN</a>
        <a href="#" aria-label="YouTube">YT</a>
        <a href="#" aria-label="Instagram">IG</a>
      </div>
    </form>
  </footer>

  <div class="bottom-fixed">Copyright 2026 AstroMed Hub. Todos os direitos reservados.</div>

  <dialog id="contentModal" class="content-modal">
    <button class="close-modal" type="button" aria-label="Fechar">X</button>
    <p id="modalType" class="kicker"></p>
    <h3 id="modalTitle"></h3>
    <p id="modalSummary"></p>
    <p id="modalDetail"></p>
  </dialog>
`;

const map = {
  news: { cards: 'newsCards', pager: 'newsPager', label: 'Noticia' },
  posts: { cards: 'postCards', pager: 'postsPager', label: 'Post' },
  podcasts: { cards: 'podcastCards', pager: 'podcastsPager', label: 'Podcast' },
};

const modal = document.querySelector('#contentModal');
const modalType = document.querySelector('#modalType');
const modalTitle = document.querySelector('#modalTitle');
const modalSummary = document.querySelector('#modalSummary');
const modalDetail = document.querySelector('#modalDetail');

function getCurrentSlice(section) {
  const { items, page, perPage } = state[section];
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
}

function renderCards(section) {
  const { cards, pager, label } = map[section];
  const current = getCurrentSlice(section);
  const cardTarget = document.querySelector(`#${cards}`);
  const pagerTarget = document.querySelector(`#${pager}`);
  const totalPages = Math.ceil(state[section].items.length / state[section].perPage);

  cardTarget.innerHTML = current
    .map((item) => {
      if (section === 'podcasts') {
        return `
          <article class="content-card video-card" data-section="${section}" data-id="${item.id}">
            <div class="thumb" aria-hidden="true"></div>
            <div>
              <p class="meta">${label} • ${item.duration}</p>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
              <button type="button" class="open-modal" data-section="${section}" data-id="${item.id}">Abrir</button>
            </div>
          </article>
        `;
      }

      return `
        <article class="content-card" data-section="${section}" data-id="${item.id}">
          <p class="meta">${label}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <button type="button" class="open-modal" data-section="${section}" data-id="${item.id}">Ler mais</button>
        </article>
      `;
    })
    .join('');

  pagerTarget.innerHTML = `
    <button type="button" class="pager-btn" data-page="prev" data-section="${section}" ${state[section].page === 1 ? 'disabled' : ''}>Anterior</button>
    <span>Pagina ${state[section].page} de ${totalPages}</span>
    <button type="button" class="pager-btn" data-page="next" data-section="${section}" ${state[section].page === totalPages ? 'disabled' : ''}>Proxima</button>
  `;
}

function renderAllSections() {
  renderCards('news');
  renderCards('posts');
  renderCards('podcasts');
}

function openContentModal(section, id) {
  const entry = state[section].items.find((item) => item.id === id);
  if (!entry) return;

  modalType.textContent = map[section].label;
  modalTitle.textContent = entry.title;
  modalSummary.textContent = entry.summary;
  modalDetail.textContent = entry.detail;
  modal.showModal();
}

document.addEventListener('click', (event) => {
  const openButton = event.target.closest('.open-modal');
  if (openButton) {
    openContentModal(openButton.dataset.section, openButton.dataset.id);
    return;
  }

  const pagerButton = event.target.closest('.pager-btn');
  if (pagerButton) {
    const { section, page } = pagerButton.dataset;
    const sectionState = state[section];
    const totalPages = Math.ceil(sectionState.items.length / sectionState.perPage);

    if (page === 'prev' && sectionState.page > 1) {
      sectionState.page -= 1;
    }

    if (page === 'next' && sectionState.page < totalPages) {
      sectionState.page += 1;
    }

    renderCards(section);
    return;
  }

  if (event.target.closest('.close-modal')) {
    modal.close();
  }
});

modal.addEventListener('click', (event) => {
  const rect = modal.getBoundingClientRect();
  const isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;

  if (!isInDialog) {
    modal.close();
  }
});

async function sendEmailByApi(payload) {
  const response = await fetch(EMAIL_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _captcha: 'false',
      ...payload,
    }),
  });

  if (!response.ok) {
    throw new Error('Falha no envio');
  }

  return response.json();
}

function setFeedback(node, message, tone) {
  node.textContent = message;
  node.classList.remove('is-success', 'is-error');
  if (tone) {
    node.classList.add(tone);
  }
}

const contactForm = document.querySelector('#contactForm');
const contactFeedback = document.querySelector('#contactFeedback');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = contactForm.querySelector('button[type="submit"]');
  const formData = new FormData(contactForm);

  button.disabled = true;
  setFeedback(contactFeedback, 'Enviando mensagem...', '');

  try {
    await sendEmailByApi({
      _subject: `Contato SPA - ${formData.get('topic')}`,
      name: formData.get('name'),
      email: formData.get('email'),
      topic: formData.get('topic'),
      message: formData.get('message'),
    });

    setFeedback(contactFeedback, 'Mensagem enviada com sucesso.', 'is-success');
    contactForm.reset();
  } catch {
    setFeedback(contactFeedback, 'Nao foi possivel enviar agora. Tente novamente.', 'is-error');
  } finally {
    button.disabled = false;
  }
});

const newsletterForm = document.querySelector('#newsletterForm');
const newsletterFeedback = document.querySelector('#newsletterFeedback');

newsletterForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = newsletterForm.querySelector('button[type="submit"]');
  const formData = new FormData(newsletterForm);

  button.disabled = true;
  setFeedback(newsletterFeedback, 'Registrando assinatura...', '');

  try {
    await sendEmailByApi({
      _subject: 'Nova inscricao newsletter',
      email: formData.get('email'),
      source: 'Formulario newsletter da SPA',
    });

    setFeedback(newsletterFeedback, 'Inscricao enviada com sucesso.', 'is-success');
    newsletterForm.reset();
  } catch {
    setFeedback(newsletterFeedback, 'Falha ao registrar inscricao. Tente novamente.', 'is-error');
  } finally {
    button.disabled = false;
  }
});

renderAllSections();
