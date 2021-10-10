var swiper1 = new Swiper('.mySwiper1', {
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

// Get all sections that have an ID defined
// const sections = document.querySelectorAll('section[id]');

// // Add an event listener listening for scroll
// window.addEventListener('scroll', navHighlighter);

// function navHighlighter() {
//   let scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 200;
//     let sectionId = current.getAttribute('id');

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       sections.forEach((item) => {
//         document.querySelector('.collapse.navbar-collapse a[href*=' + sectionId + ']')?.classList.add('active');
//         if (current !== item) {
//           document
//             .querySelector('.collapse.navbar-collapse a[href*=' + item.getAttribute('id') + ']')
//             ?.classList.remove('active');
//         }
//       });
//     } else {
//       // document.querySelector('.collapse.navbar-collapse a[href*=' + sectionId + ']')?.classList.remove('active');
//     }
//   });
// }

// Get all sections that have an ID defined
const sections = document.querySelectorAll('section[id]');
let navItems = document.querySelectorAll('.navbar-nav a ');
console.log(navItems);
// Add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute('id');
    if (!sectionId) return;
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach((item) => {
        let current = item.getAttribute('href').replace('#', '');
        if (current == sectionId) {
          console.log('yes');
        } else {
          console.log('no');
          item.classList.remove('.active');
        }
      });
      document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active');
    } else {
      // document.querySelector('.navigation a[href*=' + sectionId + ']').classList.remove('active');
      return;
    }
  });
}
