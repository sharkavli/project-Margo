let popup = document.querySelector('.popup')
let openBut = document.querySelector(".no-add__button")
let closeBut = document.querySelector('.popup__exit')
let saveBut = document.querySelector('.popup__save')
let mainText = document.querySelector('.no-add__text')
let input = document.querySelector('.popup__input')

function openPop() {
    popup.classList.add('popup__opened')
}
openBut.addEventListener('click', openPop)

function closePop() {
    popup.classList.remove('popup__opened')
}
closeBut.addEventListener('click', closePop)

function saveInput() {
    mainText.textContent = (`У нас нет рекламы, но у нас есть ${input.value}`)
    closePop();
}
saveBut.addEventListener('click', saveInput)