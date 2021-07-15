let position = 0;
const slidesToShow = 3;
const slidesToScroll = 2;
const container = document.querySelector('.side-bar');
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
    console.log('click')
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', function() {
    const itemsLeft = Math.abs(position) / itemWidth;
    console.log('click')
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