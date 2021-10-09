var swiper1 = new Swiper('.mySwiper1', {
  cssMode: true,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// var swiper2 = new Swiper(".mySwiper2", {
//   cssMode: true,
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

window.addEventListener('DOMContentLoaded', () => {
  var swiper3 = new Swiper('.mySwiper3', {
    cssMode: true,
    slidesPerView: 3.5,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    disableOnInteraction: true,
    speed: 1000,
  });
});

var navbar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
      navbar.classList.add('navStylesNew');
    } else {
      navbar.classList.remove('navStylesNew');
    }
  });
});

let images = document.querySelectorAll('img');

images.forEach((img) => {
  img.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
});
