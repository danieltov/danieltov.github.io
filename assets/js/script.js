$(function () {
  ScrollReveal().reveal('.card', { delay: 350 });
  ScrollReveal().reveal('.lazy1', { delay: 350 });
  ScrollReveal().reveal('.lazy2', { delay: 450 });
  ScrollReveal().reveal('.lazy3', { delay: 550 });
  ScrollReveal().reveal('.lazy4', { delay: 650 });
  var typed = new Typed('#typed', {
    strings: ["Hey.", "I'm Daniel.", "I am a web developer at Utah Valley University.", "I build cool things with HTML5.", "I build cool things with CSS3.", "I build cool things with JavaScript.", "I build cool things with React.", "I build cool things with Node.", "I build cool things with MongoDB.", "I build cool things with Sequelize.", "Talk to me about working on a project together."],
    smartBackspace: true,
    typeSpeed: 45,
    loop: true
  });
});