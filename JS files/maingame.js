let f1 = document.querySelector('.F1')
 let bar = document.querySelector('.progress')
 let reset = document.querySelector('.reset')
let correctAudio = document.querySelector('.correctSound')
let error = document.querySelector('.error')
f1.addEventListener('click',() => {
    correctAudio.play()
    bar.style.animationName = 'prog2'
})

 document.querySelectorAll('.fail').forEach(test2 => {
test2.addEventListener('click',() => {
    error.play()
    let progress = document.querySelector('.progress')
    progress.style.backgroundColor = 'red'
    progress.style.animationDuration = '1s';
    progress.style.animationName = 'final'
    reset.style.display = 'flex'
    })
})

let restart = document.querySelector('.restart')
let cancel = document.querySelector('.cancel')
restart.addEventListener('click', () => {
    alert("Memory further corrupted...restarting recovery.")
    location.reload()
})
cancel.addEventListener('click', () => {
    reset.style.display = 'none'
})