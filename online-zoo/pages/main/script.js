const hamburgerBtn = document.querySelector('.wrapper__checkbox')
const hamburgerMenu = document.querySelector('.wrapper__menu')
const backBtn = document.querySelector('.wrapper__btn')
const btnLine = document.querySelector('.wrapper__btn-line')

hamburgerBtn.addEventListener('click', (e) => {
    hamburgerMenu.classList.toggle('menu__nav_active')
    backBtn.classList.toggle('btn__color_active')
    btnLine.classList.toggle('btn__line_active')
})

// popup

const popupBtn = document.querySelectorAll('.popup__link');
const body = document.querySelector('body');
const popupCloseBtn = document.querySelectorAll('.close__window');
const donateInp = document.querySelector('.donation__amount');
const popupBtnItem = document.querySelectorAll('.popup__chose__donation__btns .popup__btn_item');
const amountInp = document.querySelector('.other__amount__inp');
const completeBtn = document.querySelector('.complete__btn');


// const cardL = document.querySelector('.credit-card__number');
// const cvvL = document.querySelector('.credit-card__cvv');
// const cardMonth = document.querySelector('.credit-card__date__month');
// const cardYear = document.querySelector('.credit-card__date__year');

// if (cardL.value.length == 15 && cvvL.innerHTML.length == 2) {
//   completeBtn.classList.add('complete-btn-active');
// } else {
//   completeBtn.classList.remove('complete-btn-active');
// }
// console.log(cardL.innerHTML.length)
// console.log(cardMonth.value)
if (popupBtn.length > 0) {
  for (let i = 0; i < popupBtn.length; i++) {
    const popupLink = popupBtn[i];
    popupLink.addEventListener('click', (e) => {
      const namePopup = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(namePopup);
      openPopup(currentPopup);
      if (donateInp.value === '' && !popupBtnItem[0].classList.contains('popup__btn_item__active')) {
        popupBtnItem[0].classList.add('popup__btn_item__active')
      } else if (donateInp.value && popupBtnItem[0].classList.contains('popup__btn_item__active')){
        popupBtnItem[0].classList.remove('popup__btn_item__active')
      }
      amountInp.value = donateInp.value;
      e.preventDefault(); // после перехода блокировка работы ссылки
    })
    }
}

if (popupCloseBtn.length > 0) {
  for (let i = 0; i < popupCloseBtn.length; i++) {
    const element = popupCloseBtn[i];
    element.addEventListener('click', (e) => {
      closePopup(element.closest('.popup'));
      e.preventDefault(); // после перехода блокировка работы ссылки
    })
  }
}
function openPopup(currentPopup) {
  if (currentPopup) {
    const activePopup = document.querySelector('.popup.open');
    if (activePopup) {
      closePopup(activePopup, false);
    } 
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__content')) {
        closePopup(currentPopup);
      }
    })
  }
}
function closePopup(activePopup) {
  activePopup.classList.remove('open');
}

document.addEventListener('keydown', (e) => {
  if (e.which === 27) {
    const activePopup = document.querySelector('.popup.open');
    closePopup(activePopup);
  }
})

//slider our-pets

let position = 0;
const slidesToShow = 3;
const slidesToScroll = 2;
const container = document.querySelector('.slider-container');
const track = document.querySelectorAll('.slider-track');
const btnPrev = document.querySelector('.left-arrow');
const btnNext = document.querySelector('.right-arrow');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', function() {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', function() {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
    setPosition();
    checkBtns();
});

const setPosition = () => {
  for (let i = 0; i < track.length; i++) {
    if (position < -7200) {
      track[i].style.transform = `translateX(${0}px)`;
      position = 0;
    }
    track[i].style.transform = `translateX(${position}px)`;
  }
  console.log(position)
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();



// slider users-think
let cardsPosition = 0;
const cardSlidesToShow = 2;
const cardSlidesToScroll = 1.4;
const cardsContainer = document.querySelector('.cards-slider');
const cardsTrack = document.querySelectorAll('.cards-slider__track');
const cardsBtnPrev = document.querySelector('.cards-slider__left_arrow');
const cardsBtnNext = document.querySelector('.cards-slider__right_arrow');
const cardsItems = document.querySelectorAll('.cards-slider__item');
const cardItemsCount = cardsItems.length;
const cardsItemWidth = cardsContainer.clientWidth / cardSlidesToShow;
const cardsMovePosition = cardSlidesToScroll * itemWidth;

let intervalId = 0;
let timeoutId = 0;

cardsItems.forEach((cardItem) => {
  cardItem.style.minWidth = `515px`;
});

cardsBtnNext.addEventListener('click', handleNextBtn);

function handleNextBtn(event) {
  if (event) {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(autoRunSlider, 60000);
  }
  const cardsItemsLeft = cardItemsCount - (Math.abs(cardsPosition) + cardSlidesToShow * cardsItemWidth) / cardsItemWidth;

  cardsPosition -= cardsItemsLeft >= cardSlidesToScroll ? cardsMovePosition : cardsItemsLeft * cardsItemWidth;
  
  cardSetPosition();
  cardCheckBtns();
}

function autoRunSlider() {
  intervalId = setInterval(handleNextBtn, 15000);
}

cardsBtnPrev.addEventListener('click', handlePrevBtn)
  
function handlePrevBtn(event) {  
  if (event) {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(autoRunSlider, 60000);
  }
    const cardsItemsLeft = Math.abs(cardsPosition) / cardsItemWidth;

    cardsPosition += cardsItemsLeft >= cardSlidesToScroll ? cardsMovePosition : cardsItemsLeft * cardsItemWidth;
    
    cardSetPosition();
    cardCheckBtns();
};

const cardSetPosition = () => {
  for (let i = 0; i < cardsTrack.length; i++) {
    if (cardsPosition < -1200) {
      cardsTrack[i].style.transform = `translateX(${0}px)`;
      cardsPosition = 0;
    }
    cardsTrack[i].style.transform = `translateX(${cardsPosition}px)`;
  }
};

const cardCheckBtns = () => {
  cardsBtnPrev.disabled = cardsPosition === 0;
  cardsBtnNext.disabled = cardsPosition <= -(cardItemsCount - cardSlidesToShow) * cardsItemWidth;
};

cardCheckBtns();
autoRunSlider();