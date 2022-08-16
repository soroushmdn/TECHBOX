// @@@@@@@@@@@@@@@@@@ PRELOADER @@@@@@@@@@@@@@@@@@
onload = () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 2000);
};

// @@@@@@@@@@@@@@@@@@ SHOW navSearch @@@@@@@@@@@@@@@@@@

const navSearch = document.getElementById('nav-search'),
  searchButton = document.getElementById('search-button'),
  navSearchClose = document.getElementById('nav-search-close');

searchButton.addEventListener('click', () => {
  navSearch.classList.add('show-nav-search');
});

navSearchClose.addEventListener('click', () => {
  navSearch.classList.remove('show-nav-search');
});

// @@@@@@@@@@@@@@@@@@ SHOW navMenu @@@@@@@@@@@@@@@@@@

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  main = document.getElementById('main'),
  footer = document.getElementById('footer');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-nav-menu');
  navToggle.style.display = 'none';
  main.classList.add('blur');
  footer.classList.add('blur');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-nav-menu');
  navToggle.style.display = 'flex';
  main.classList.remove('blur');
  footer.classList.remove('blur');
});

// @@@@@@@@@@@@@@@@@@ REMOVE navMenu @@@@@@@@@@@@@@@@@@

const navLinks = document.querySelectorAll('.nav__link');
const mediaQuery = window.matchMedia('(max-width: 767px)');

navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-nav-menu');
    main.classList.remove('blur');
    footer.classList.remove('blur');

    if (mediaQuery.matches) {
      navToggle.style.display = 'flex';
    }
  });
});

// @@@@@@@@@@@@@@@@@@ CHANGE THEME COLOR @@@@@@@@@@@@@@@@@@

const themeButton = document.getElementById('theme-button'),
  body = document.body,
  currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
  body.classList.add('light-theme');
}

themeButton.addEventListener('click', () => {
  body.classList.toggle('light-theme');

  if (body.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', ' ');
  } else {
    localStorage.removeItem('currentTheme');
  }
});

// @@@@@@@@@@@@@@@@@@ LOG @@@@@@@@@@@@@@@@@@

const log = document.getElementById('log'),
  logButton = document.getElementById('log-button'),
  logClose = document.querySelectorAll('.log__close'),
  signIn = document.getElementById('signin'),
  signInButton = document.querySelectorAll('.signin-button'),
  signUp = document.getElementById('signup'),
  signUpButton = document.getElementById('signup-button'),
  forgot = document.getElementById('forgot'),
  forgotButton = document.getElementById('forgot-button');

logButton.addEventListener('click', () => {
  log.classList.add('show-log');
  signIn.classList.add('display-grid');
});

logClose.forEach((l) => {
  l.addEventListener('click', () => {
    log.classList.remove('show-log');
    signIn.classList.remove('display-grid');
    signUp.classList.remove('display-grid');
    forgot.classList.remove('display-grid');
  });
});

signUpButton.addEventListener('click', (e) => {
  signIn.classList.add('display-none');
  signIn.classList.remove('display-grid');
  signUp.classList.add('display-grid');
  e.preventDefault();
});

signInButton.forEach((s) => {
  s.addEventListener('click', (e) => {
    signIn.classList.add('display-grid');
    signIn.classList.remove('display-none');
    signUp.classList.add('display-none');
    signUp.classList.remove('display-grid');
    forgot.classList.add('display-none');
    forgot.classList.remove('display-grid');
    e.preventDefault();
  });
});

forgotButton.addEventListener('click', (e) => {
  signIn.classList.add('display-none');
  signIn.classList.remove('display-grid');
  forgot.classList.add('display-grid');
  e.preventDefault();
});

// @@@@@@@@@@@@@@@@@@ swiperjs.com @@@@@@@@@@@@@@@@@@

const latestSwiper = new Swiper('.latest__swiper', {
  spaceBetween: 15,
  loop: 'true',
  slidesPerView: 'auto',

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// @@@@@@@@@@@@@@@@@@ SHOW SCROLLUP @@@@@@@@@@@@@@@@@@

window.addEventListener('scroll', scrollup);

function scrollup() {
  const scrollup = document.getElementById('scrollup');

  if (window.scrollY >= 100) {
    scrollup.classList.add('show-scrollup');
  } else {
    scrollup.classList.remove('show-scrollup');
  }
}
