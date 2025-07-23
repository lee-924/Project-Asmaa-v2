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
  failed()
    })
})

function failed() {
    document.querySelector('body').style.backgroundColor = 'darkred';
    error.play()
    let progress = document.querySelector('.progress')
    progress.style.backgroundColor = 'red'
    progress.style.animationDuration = '1s';
    progress.style.animationName = 'final'
    reset.style.display = 'flex'
}
let restart = document.querySelector('.restart')

restart.addEventListener('click', () => {
    
    alert("Memory further corrupted...restarting recovery.")
    location.reload()
    window.scrollTo({
      top: 200, 
      behavior: 'smooth' })
    }
    
)

let drag = document.querySelectorAll('.drag') 
let puzz = document.querySelector('.puzzle')

drag.forEach(drag => {
    drag.addEventListener('dragstart', () => {
        console.log('hello')
        drag.classList.add('draging')
    }) 
    drag.addEventListener('dragend', () => {
        drag.classList.remove('draging')
    })
})

puzz.addEventListener('dragover', (e) => {
    e.preventDefault()
    const afterEle = getDragAfterElement(puzz,e.clientY)
    const drag = document.querySelector('.draging')

    if (afterEle == null) {
         puzz.appendChild(drag)
    }
    else {
        puzz.insertBefore(drag, afterEle)
    }


})


function getDragAfterElement(puzz,y) {
    const dragEle = [...puzz.querySelectorAll('.drag:not(.draging)')]

return dragEle.reduce((closest,child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height/2;
    if(offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child}
    }
    else {
        return closest
    }
},{offset : Number.NEGATIVE_INFINITY}).element

}


document.querySelector('.finalOrder').addEventListener('click', () => {
    if (sorting()) {
        correctAudio.play()
        bar.style.animationName = 'prog3'
    }
    else {
        alert("wrong order")
        tries += 1
        if (tries === 3) {
            failed()
            tries = 0;
        }
    }
})



const ids = ['one','two','three','four','five']
let tries = 0;
function sorting() {
    userID = []
    document.querySelectorAll('.drag').forEach((lol) => {
    userID.push(lol.id)  })
for (let i = 0; i < userID.length; i++) {
 if (ids[i]!==userID[i]) {
        return false
    }}
       return true
}

let scrollUp = document.querySelector('.scrollup')
scrollUp.addEventListener('click',() => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' })
    })