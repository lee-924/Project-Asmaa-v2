let reveal = document.querySelector(".video");
let secretDiv = document.querySelector('.revealDiv')
let cancel = document.querySelector('.cancel')

reveal.addEventListener('click', () => {
    secretDiv.style.display = 'block'
})

cancel.addEventListener('click', () => {
    secretDiv.style.display = 'none'
})

let homeBtn = document.querySelector('.backToHome')
homeBtn.addEventListener('click', () => {
    window.location.href = 'home.html'
})

let done = document.querySelector('.IamDone')
done.addEventListener('click', () => {
    document.querySelector('.warningDiv').style.display = 'none'
})