const hamburgerBtn = document.querySelector('.wrapper__checkbox')
const hamburgerMenu = document.querySelector('.wrapper__menu')
const backBtn = document.querySelector('.wrapper__btn')
const btnLine = document.querySelector('.wrapper__btn-line')

hamburgerBtn.addEventListener('click', (e) => {
    hamburgerMenu.classList.toggle('menu__nav_active')
    backBtn.classList.toggle('btn__color_active')
    btnLine.classList.toggle('btn__line_active')
})