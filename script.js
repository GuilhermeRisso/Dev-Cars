let preButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = document.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')


let active = 0
let fistPosition = 0
let lastPosition = items.length - 1


function setSlider() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.numbers').innerHTML = '0' + (active + 1)
}


nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}

preButton.onclick = () => {
    active = active - 1 < fistPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}