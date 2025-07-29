let reveal = document.querySelector(".video");
let secretDiv = document.querySelector('.revealDiv')
let cancel = document.querySelector('.cancel')

reveal.addEventListener('click', () => {
    secretDiv.style.display = 'block'
})

cancel.addEventListener('click', () => {
    secretDiv.style.display = 'none'
})