let click = document.querySelector('.me')
let sec = document.querySelector('.clickDiv')

click.addEventListener('click', () => {
    
    sec.style.display = 'flex'
})

let cancel = document.querySelector('.cancel')
cancel.addEventListener('click', () => {
    sec.style.display = 'none'
})