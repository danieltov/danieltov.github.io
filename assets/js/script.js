$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  ScrollReveal().reveal('.card', { delay: 350 });
  ScrollReveal().reveal('.lazy1', { delay: 350 });
  ScrollReveal().reveal('.lazy2', { delay: 450 });
  ScrollReveal().reveal('.lazy3', { delay: 550 });
  ScrollReveal().reveal('.lazy4', { delay: 650 });
  var typed = new Typed('#typed', {
    strings: ["Hey.", "I'm Daniel.", "I am a front-end web developer.", "I am a full-stack web developer.", "I am a student.", "I am available for new projects."],
    smartBackspace: true, // Default value
    typeSpeed: 35,
    loop: true
  });
});
