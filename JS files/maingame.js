let f1 = document.querySelector('.F1')
 let bar = document.querySelector('.progress')
 let reset = document.querySelector('.reset')
let correctAudio = document.querySelector('.correctSound')
let error = document.querySelector('.error')
let body = document.querySelector('body')
f1.addEventListener('click',() => {
    correctAudio.play()
    score[0].comp = true;
    store(score)
    
})

 document.querySelectorAll('.fail').forEach(test2 => {
test2.addEventListener('click',() => {
  failed()
    })
})

function failed() {
    body.style.backgroundColor = 'darkred';
    error.play()
    bar.style.backgroundColor = 'red'
    reset.style.display = 'flex'
    bar.style.width = '400px'
}
let restart = document.querySelector('.restart')

restart.addEventListener('click', () => {
    resetGame()
   
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
        score[1].comp = true;
        store(score)
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


let score = [
{firstGame: 'MCQ',
    comp: false
},
{secondGame: 'SORTING PUZZLE',
    comp: false},
{thirdGame: 'idk',
    comp: false},
{fourthGame: 'idk',
    comp: false},
{fifthGame: 'idk',
    comp: false}
]
store(score)

function resetGame() {
let scorer = [
{firstGame: 'MCQ',
    comp: false
},
{secondGame: 'SORTING PUZZLE',
    comp: false},
{thirdGame: 'idk',
    comp: false},
{fourthGame: 'idk',
    comp: false},
{fifthGame: 'idk',
    comp: false}
]
store(scorer)
reset.style.display = 'none'
body.style.backgroundColor = '#111';
bar.style.backgroundColor = 'lime'
 window.scrollTo({
      top:0, 
      behavior: 'smooth' })
setTimeout(() => {location.reload()},2000)
    }



function storage() {
    let scorer = JSON.parse(localStorage.getItem('scores'))
    let scorePoint = 0;
    console.log(scorer)
    scorer.forEach((index) => {
            if (index.comp) {
                console.log("true")
             scorePoint += 1 }  }) 
   bar.style.width = `${scorePoint*80}px` }

   /* if (scorePoint === 5) {
    WINNING SCREEN HERE
   } */

function store(score) {
    localStorage.setItem('scores',JSON.stringify(score))
    storage()
}