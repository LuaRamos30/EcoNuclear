window.addEventListener("scroll", function(){
    let header = document.querySelector('.cabecalho') /*Aqui ele ta capturando o cabecalho para fazer o restante da funcao*/
    header.classList.toggle('rolagem',window.scrollY >  200 )
})


document.querySelector('.menu-toggle').addEventListener('click', function() {
    let header = document.querySelector('.cabecalho');
    header.classList.toggle('menu-aberto');
});


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".cabecalho_menu");
  
    menuToggle.addEventListener("change", function() {
      if (this.checked) {
        menu.classList.add("open");
      } else {
        menu.classList.remove("open");
      }
    });
  });