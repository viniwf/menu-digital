$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      margin:5,
      autoplayTimeout: 4500,
      animateOut: 'fadeOut', // Define o tipo de transição ao sair de um item
      animateIn: 'fadeIn',
      smartSpeed: 4000,
      responsive: {
        0: {
          items: 1 // Número de itens a serem exibidos por vez para telas menores
        },
        600: {
          items: 3 // Número de itens a serem exibidos por vez para telas médias
        },
        1000: {
          items: 3 // Número de itens a serem exibidos por vez para telas maiores
        },
        1444:{
          items: 4
        },
        1920: {
          items: 5 // Número de itens a serem exibidos por vez para telas maiores
        }
      }
    });
  })