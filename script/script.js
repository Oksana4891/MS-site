//   Burger menu screen <= 996

const burger = document.querySelector('#burger');
const burgerMenu = document.querySelector('.js-navbar');

burger.onclick = function () {
    burger.classList.toggle('is-active');
    burgerMenu.classList.toggle('is-open');
    if (contactBtn.classList.contains('is-active')) {
        contactBtn.classList.remove('is-active');
        contactBlock.classList.remove('is-open');
    }
};

//   Contact btn screen <= 996

const contactBtn = document.querySelector('#contact-btn');
const contactBlock = document.querySelector('.js-contact-block');

contactBtn.onclick = function () {
    contactBtn.classList.toggle('is-active');
    contactBlock.classList.toggle('is-open');
    if (burger.classList.contains('is-active')) {
        burger.classList.remove('is-active');
        burgerMenu.classList.remove('is-open');
    }
};

// Open-close submenu screen <=996

const menuItems = document.querySelectorAll('.js-menuItems');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains("navbar_center_menu-link")) {
            e.preventDefault();
            item.classList.toggle('is-open');
        }
        else {
            return;
        }
    }
    );
}
);



// Slider SWIPER

const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// -------------LIGHTBOX----------

function lightbox(itemSelector, modalSelector, modalImageSelector) {
    const items = document.querySelectorAll(itemSelector);
    const modal = document.querySelector(modalSelector);
    const modalImage = document.querySelector(modalImageSelector);

    // Open Modal

    items.forEach((item) => {
      item.addEventListener("click", handleOpenModal);

      function handleOpenModal(event) {
        event.preventDefault();    
       let img=event.currentTarget.firstElementChild;
        if (event.currentTarget === event.target) {
          return;
        } else {
          modal.classList.add("is-open");
          modalImage.alt = img.alt;
          modalImage.src = img.dataset.source;

          window.addEventListener("keydown", handleCloseModalEsc);
          modal.addEventListener("click", handleCloseModalBackground);
        }
      }
    });

    // Close Modal

    function handleCloseModal() {
      modalImage.alt = "";
      modalImage.src = "";
      modal.classList.remove("is-open");
    }

    function handleCloseModalEsc(event) {
      if (event.code === "Escape") {
        handleCloseModal();
      }
    }

    function handleCloseModalBackground(event) {
      if (event.target === modalImage) {
        return;
      }
      handleCloseModal();
      modal.removeEventListener("click", handleCloseModalBackground);
    }
  }


  lightbox(".js-lightBoxItem", ".js-lightbox", ".lightbox__image");