'use strict'
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};
if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

const menuSubList = document.querySelector('.menu__sub-list');
menuSubList.addEventListener('mouseover', function (e) {
  const classsesItem = document.querySelector('.classes__item');
  classsesItem.style.backgroundColor = 'white';
  classsesItem.style.color = '#72d0f4';
});
menuSubList.addEventListener('mouseout', function (e) {
  const classsesItem = document.querySelector('.classes__item');
  classsesItem.style.backgroundColor = '';
  classsesItem.style.color = '';
});

/* burger */
const menuBurger = document.querySelector('.menu__icon');
if (menuBurger) {
  menuBurger.addEventListener('click', function (e) {
    const menuBody = document.querySelector('.menu__body');
    menuBurger.classList.toggle('_active');
    menuBody.classList.toggle(`_active`);
    document.body.classList.toggle('_lock');
  });
}

const likeSlot = document.querySelectorAll('.fa-heart');
if (likeSlot.length > 1) {
  likeSlot.forEach(function (item) {
    item.addEventListener('click', () => {
      item.classList.toggle('_colRed');
    });
  });
}

let mySwiperSlide = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 45,
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 80,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    650: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    951: {
      slidesPerView: 1,
      spaceBetween: 85,
    },
    1120: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }
});
let myInageSlider = new Swiper(".gallery-gym__mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  grid: {
    rows: 2,
  },
  navigation: {
    nextEl: ".newSwiperButtonNext",
    prevEl: ".newSwiperButtonPrev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  simulateTouch: true,

  breakpoints: {
    280: {
      grid: {
        rows: 2,
      },
      slidesPerView: 1,
    },
    400: {
      grid: {
        rows: 2,
      },
      slidesPerView: 2,
    },
    530: {
      grid: {
        rows: 2,
      },
      slidesPerView: 3,
    },
    780: {
      grid: {
        rows: 2,
      },
      slidesPerView: 4,
    },
    1001: {
      grid: {
        rows: 2,
      },
      slidesPerView: 3,
    },
  },
});

const myImageBlogSlider = new Swiper(".blog-swiper", {
  navigation: {
    nextEl: ".swiper-blog-next",
    prevEl: ".swiper-blog-prev",
  },
  spaceBetween: 150,
  autoplay: {
    delay: 3000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    280: {
      spaceBetween: 350,
    },
    680: {
      spaceBetween: 150,
    },
  },
})

const myBlogSSlider = new Swiper('.myBlogSwiper', {
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 10000,
  },
})



