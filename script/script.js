  //   Burger menu screen <= 996

  const burger = document.querySelector('#burger');
  const burgerMenu = document.querySelector('.js-navbar');
  
  burger.onclick = function () {
      burger.classList.toggle('is-active');
      burgerMenu.classList.toggle('is-open');
  };

//   Contact btn screen <= 996

const contactBtn = document.querySelector('#contact-btn');
const contactBlock = document.querySelector('.js-contact-block');

contactBtn.onclick = function () {
    contactBtn.classList.toggle('is-active');
    contactBlock.classList.toggle('is-open');
};


// Slider SWIPER

const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


