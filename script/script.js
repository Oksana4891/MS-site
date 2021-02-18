//   Burger menu screen <= 996

const burger = document.querySelector("#burger");
const burgerMenu = document.querySelector(".js-navbar");

burger.onclick = function () {
  burger.classList.toggle("is-active");
  burgerMenu.classList.toggle("is-open");
  if (contactBtn.classList.contains("is-active")) {
    contactBtn.classList.remove("is-active");
    contactBlock.classList.remove("is-open");
  }
};

//   Contact btn screen <= 996

const contactBtn = document.querySelector("#contact-btn");
const contactBlock = document.querySelector(".js-contact-block");

contactBtn.onclick = function () {
  contactBtn.classList.toggle("is-active");
  contactBlock.classList.toggle("is-open");
  if (burger.classList.contains("is-active")) {
    burger.classList.remove("is-active");
    burgerMenu.classList.remove("is-open");
  }
};

// Open-close submenu screen <=996

const menuItems = document.querySelectorAll(".js-menuItems");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("navbar_center_menu-link")) {
      item.classList.toggle("is-open");
    } else {
      return;
    }
  });
});

// Slider SWIPER
// MAIN SLIDER index.html

const swiper = new Swiper(".js-main-slider", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// // SLIDER page about.html

const swiperAbout = new Swiper(".js-about-slider", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// -------------LIGHTBOX----------

function lightbox(
  openSelector,
  imgSelector,
  modalSelector,
  modalImageSelector,
  closeSelector
) {
  const openBnts = document.querySelectorAll(openSelector);
  const smallImgs = document.querySelectorAll(imgSelector);
  const modal = document.querySelector(modalSelector);
  const modalImage = document.querySelector(modalImageSelector);
  const closeBtn = document.querySelector(closeSelector);

  // Open Modal

  openBnts.forEach((btn, i) => {
    btn.addEventListener("click", handleOpenModal);

    function handleOpenModal(event) {
      event.preventDefault();
      document.body.style.overflow = "hidden";
      let img = smallImgs[i];
      modal.classList.add("is-open");
      modalImage.alt = img.alt;
      modalImage.src = img.dataset.source;
      closeBtn.addEventListener("click", handleCloseModal);
      window.addEventListener("keydown", handleCloseModalEsc);
      modal.addEventListener("click", handleCloseModalBackground);
    }
  });

  // Close Modal

  function handleCloseModal() {
    document.body.style.overflow = "";
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

lightbox(
  ".js-lightboxOpen",
  ".js-smallImg",
  ".js-lightbox",
  ".lightbox__image",
  ".js-lightboxClose"
);
