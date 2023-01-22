function initScroll(){
  const linksInternos = document.querySelectorAll('.menu-nav a[href^="#"');
  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    /* ALTERNATIVA VIÁVEL
    const distancia = section.offsetTop;
    window.scrollTo({
      top: distancia,
      behavior: 'smooth',
    });*/
  }
  linksInternos.forEach((link) =>{
    link.addEventListener('click', scrollToSection);
  })
}
initScroll();
