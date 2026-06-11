const menuToggle = document.querySelector('.botao-menu');
const mainNav = document.querySelector('.navegacao-principal');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('esta-aberto');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.navegacao-principal a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('esta-aberto');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('esta-visivel');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.revelar').forEach((el) => observer.observe(el));




const botaoWhatsAppForm = document.querySelector('.botao-whatsapp-form');
const formularioContato = document.querySelector('.formulario-contato');

botaoWhatsAppForm?.addEventListener('click', () => {
  if (!formularioContato) return;

  const dados = new FormData(formularioContato);
  const nome = dados.get('nome') || '';
  const email = dados.get('email') || '';
  const telefone = dados.get('telefone') || '';
  const empresa = dados.get('empresa') || '';
  const mensagem = dados.get('mensagem') || '';

  const texto = [
    'Olá, quero solicitar um orçamento para um site.',
    '',
    `Nome: ${nome}`,
    `E-mail: ${email}`,
    `Telefone: ${telefone}`,
    `Empresa: ${empresa}`,
    '',
    `Mensagem: ${mensagem}`
  ].join('\n');

  window.open(`https://wa.me/5521969282873?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
});


const botaoTopo = document.querySelector('.botao-topo');

botaoTopo?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const linkEmailForm = document.querySelector('.link-email-form');

linkEmailForm?.addEventListener('click', (event) => {
  const gmailLink = linkEmailForm.dataset.gmailLink;

  if (!gmailLink) return;

  event.preventDefault();
  window.open(gmailLink, '_blank', 'noopener');
});
