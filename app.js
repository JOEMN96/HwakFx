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

window.addEventListener('DOMContentLoaded', () => {
  var swiper3 = new Swiper('.mySwiper3', {
    slidesPerView: 3.5,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
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

const sections = document.querySelectorAll('section[id]');
let navItems = document.querySelectorAll('.navbar-nav a ');
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 250;
    let sectionId = current.getAttribute('id');
    if (!sectionId) return;
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach((item) => {
        let current = item.getAttribute('href').replace('#', '');
        if (current != sectionId) {
          item.classList.remove('active');
        }
      });
      document.querySelector('.navbar-nav a[href*=' + sectionId + ']')?.classList?.add('active');
    } else {
      return;
    }
  });
}

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    navItems.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
    e.target.classList.add('active');
  });
});
