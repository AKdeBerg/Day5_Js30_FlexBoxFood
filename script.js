const foods = document.querySelectorAll('.food')

const toggleOpen = function () {
    console.log('hey')
    this.classList.toggle('open')
}

foods.forEach(food => food.addEventListener('click', toggleOpen))


const toggleOpenActive = function (e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}


foods.forEach(food => food.addEventListener('transitionend', toggleOpenActive))