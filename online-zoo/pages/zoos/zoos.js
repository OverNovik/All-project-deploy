const hamburgerBtn = document.querySelector('.wrapper__checkbox')
const hamburgerMenu = document.querySelector('.wrapper__menu')
const backBtn = document.querySelector('.wrapper__btn')
const btnLine = document.querySelector('.wrapper__btn-line')

hamburgerBtn.addEventListener('click', (e) => {
    hamburgerMenu.classList.toggle('menu__nav_active')
    backBtn.classList.toggle('btn__color_active')
    btnLine.classList.toggle('btn__line_active')
})



// sidebar
const sidebarBtn = document.querySelector('.side-bar__live_btn');
const tooltipBtn = document.querySelector('.side-bar__leave_btn');
const tooltipAll = document.querySelectorAll('.tooltip-text');

function openMenu() {
  console.log(sidebarBtn.innerHTML)
  document.querySelector('.side-bar__list').classList.toggle('side-bar-active');
  document.querySelector('.slide-bar__scroll_btn').classList.toggle('side-bar-active');
}

function openTooltip() {
  for (let i = 0; i < tooltipAll.length; i++) {
    tooltipAll[i].classList.toggle('tooltip-active')
  }
  
  if (tooltipBtn.innerHTML == '»') {
    tooltipBtn.innerHTML = '«';
  } else {
    tooltipBtn.innerHTML = '»';
  }
}

tooltipBtn.addEventListener('click', openTooltip)
sidebarBtn.addEventListener('click', openMenu);

// slider

let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
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
    if (position < -1350) {
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


// video

const videoLinks = document.querySelectorAll('.big-video__panda');
const video = document.querySelector('.video');

if (videoLinks.length > 0) {
  for (let i = 0; i < videoLinks.length; i++) {
    videoLinks[i].addEventListener('click', () => {
      video.src = `https://www.youtube.com/embed/${videoLinks[i].dataset.videoId}`;
    })
    }
}

