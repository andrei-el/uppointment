// Клик на ссылку Products, поведение галочки, выпадающее меню

let nav_product = document.querySelector('.header__nav-button');
let nav_product_active = document.querySelector('.header__nav-button_mark')
let product_menu = document.querySelector('.header__product-menu')
nav_product.addEventListener('click', function() {
  nav_product_active.classList.toggle("header__nav-button_mark--active")
  product_menu.classList.toggle("header__product-menu--active")
});

document.addEventListener('click', function (event) {
  if (event.target !== nav_product) {
    product_menu.classList.remove('header__product-menu--active');
    nav_product_active.classList.remove('header__nav-button_mark--active');
  }
})


document.addEventListener('keydown', function (event) {
  if (event.key === 'Tab' || event.key === 'Escape') {
    product_menu.classList.remove('header__product-menu--active');
    nav_product_active.classList.remove('header__nav-button_mark--active');
  }
})


// Всплывающее меню

let header__menu = document.querySelector('.header__menu-block')
let header__menu_btn = document.querySelector('.ham1')
header__menu_btn.addEventListener('click', function() {
  header__menu.classList.toggle("header__menu-block--active")
});



// Клик на about-card__title

let cards_text = document.querySelectorAll('.about-card__text')

for (let item of cards_text) {
  let card_svg = item.getElementsByClassName('about-card__text_svg')[0];
  card_svg.style.fill = "#2B4657";
  let card_title = item.getElementsByClassName('about-card__h3')[0];
  let card_label = item.getElementsByClassName('about-card__h3')[0];
  let card_p = item.getElementsByClassName('about-card__p')[0];

  card_title.addEventListener('click', function() {
    item.classList.toggle('about-card__text_blue')
    card_label.classList.toggle('about-card__h3_white')
    card_p.classList.toggle('about-card__p_white')

    if(card_svg.style.fill == "rgb(43, 70, 87)") {
      card_svg.style.fill = "#FFF"
    } else if(card_svg.style.fill == "rgb(255, 255, 255)") {
      card_svg.style.fill = "#2B4657"
    } 
  })
}


// Скролл
new WOW().init();


// Слайдер 1

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper_text = new Swiper('.swiper-text', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper_mini = new Swiper('.swiper-mini', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: 'true',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Слайдер 2

const swiper_menu = new Swiper('.swiper-menu', {
  // Optional parameters
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  speed: 1000,
  spaceBetween: 280,
  mousewheel: {
    releaseOnEdges: true,
  },
});



// Клик на price input

let price__cards = document.querySelectorAll('.price__card');

for (let item of price__cards) {
  let price_svg = item.getElementsByClassName('price__card-wrap_svg')[0];
  price_svg.style.fill = "#356FB5";
  let chek = item.getElementsByClassName('price-input-label')[0];
  let price__h5 = item.getElementsByClassName('price__h5')[0];

  chek.addEventListener('click', function(e) {
    item.classList.toggle('price__card_active')
    price__h5.classList.toggle('price__h5_active')

    if(price_svg.style.fill == "rgb(53, 111, 181)") {
        price_svg.style.fill = "#FFF"
      } else if(price_svg.style.fill == "rgb(255, 255, 255)") {
        price_svg.style.fill = "#356FB5"
      } 
  })
}


// Select


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i=0; i<this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  };
};


document.querySelectorAll('.input_business').forEach(function (dropDownWrapper) {
  
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
  const dropDownMark = dropDownWrapper.querySelector('.dropdown__button-mark');


  dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--visible')
    this.classList.add('dropdown__button--active');
    dropDownMark.classList.toggle('dropdown__button-mark--active');
  });


  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (event) {

      event.stopPropagation();

      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownMark.classList.remove('dropdown__button-mark--active');
    })
  })


  document.addEventListener('click', function (event) {
    if (event.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownMark.classList.remove('dropdown__button-mark--active');
    }
  })


  document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownMark.classList.remove('dropdown__button-mark--active');
    }
  })
});

