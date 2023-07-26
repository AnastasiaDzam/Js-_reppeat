
const body = document.querySelector('body')
body.style.backgroundColor = '#1C1B22'
body.style.color = 'white'

const heading = body.querySelector('.heading')
heading.textContent = 'Easy Peasy ;)'

const button = body.querySelector('button')
button.addEventListener('click',(=> {
    const type = prompt('Type?')

    heading.style.color = '#60FFCA'
}))