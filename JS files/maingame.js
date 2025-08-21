let f1 = document.querySelector('.F1')
 let bar = document.querySelector('.progress')
 let reset = document.querySelector('.reset')
let error = document.querySelector('.error')
let body = document.querySelector('body')
f1.addEventListener('click',() => {
    CorrectSound()
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
        CorrectSound()
        score[1].comp = true;
        store(score)
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
{thirdGame: 'GuessingWord',
    comp: false},
{fourthGame: 'TwoLiesOneTruth',
    comp: false},
]
store(score)

function resetGame() {
let scorer = [
{firstGame: 'MCQ',
    comp: false
},
{secondGame: 'SORTING PUZZLE',
    comp: false},
{thirdGame: 'GuessingWord',
    comp: false},
{fourthGame: 'TwoLiesOneTruth',
    comp: false},

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
   bar.style.width = `${scorePoint*92}px` }

   /* if (scorePoint === 5) {
    WINNING SCREEN HERE
   } */

function store(score) {
    localStorage.setItem('scores',JSON.stringify(score))
    storage()
}

/* THIRD GAME */
let guessBtn = document.querySelector('.guessBtn')
let guessBox = document.querySelector('.guess')
let hint = document.querySelector('.hint')
let clickCount = 0;
guessBtn.addEventListener('click', () => {
    clickCount += 1;
    let value = guessBox.value
    console.log(value)
    let val = value.toLowerCase().replaceAll(" ", ""); 
    console.log(val)
    if (val === 'ducklingarmy') {
        CorrectSound()
        let p = 'CORRECT WORD!!'
        hint.innerHTML = p;
        score[2].comp = true;
        store(score)

    }
    else {
        if (clickCount === 1) {
        let p = 'Hint: its an army'
        hint.innerHTML = p; }
        else if (clickCount === 2) {
            let p = "Another hint: it starts with D"
            hint.innerHTML = p }
        else if (clickCount === 3) {
            let p = "Another hint: Quack Quack"
            hint.innerHTML = p;
        }
        else {
            clickCount = 0;
            failed()
        }

}
    guessBox.value = ''
   
})

/* FOURTH GAME */
let truthy = document.querySelector('.truth')
let rest = document.querySelector('.result4')
truthy.addEventListener('click',() => {
    rest.style.color = 'lime'
    rest.innerHTML = 'CORRECT!!'
    CorrectSound()
    score[3].comp = true;
    store(score)
    
})

let falsy = document.querySelectorAll('.falsy')
falsy.forEach((ind) => {
    ind.addEventListener('click', () => {
    rest.style.color = 'red'
    rest.innerHTML = 'WRONG!!'
    setTimeout(() => {
    failed()
    },1000)
    
})
})

/* FIFTH GAME || RAPID FIRE */
let rapid = document.querySelector('.rapidStart')
let rapidP = document.querySelector('.warning')
let rapidStartBtn = document.querySelector(".startBtn") 
let rapidFire = document.querySelector('.rapidFire')

rapidStartBtn.addEventListener('click', () => {
    let lastCount = 0
    score.forEach((ind) => {
        if (ind.comp) {
            lastCount += 1
        }
    })
    
    if (lastCount===4) {
        lastCount = 0;
        startRapidGame()
    }
    else
    rapidP.innerHTML = `FINISH THE PREVIOUS GAMES BEFORE PLAYING THIS`
}) 

function startRapidGame() {
    rapidStartBtn.style.display = 'none'
    let counter = [5,4,3,2,1]
    counter.forEach((ind,i) => {
        setTimeout(() => {
            rapidP.innerHTML = ind
        },i*1000)
    })
    setTimeout(() => {
    rapid.style.display = 'none'
    rapidFire.style.display = 'flex'
    let ansCount = 0;
    rapidFired(ansCount)
    timer()
    },5000) }

let ansCount = 0;
let set1 = [0, 2, 3, 5, 8];
let set2 = [1, 4, 6, 7, 9];
let currentCorrect = ''; // Will store 'ch1' or 'ch2'

let ch1 = document.querySelector('.ch1');
let ch2 = document.querySelector('.ch2');
let question = document.querySelector('.rapidQuestion');

function rapidFired(count) {
  // Set the correct answer
  if (set1.includes(count)) {
    currentCorrect = 'ch1';
  } else if (set2.includes(count)) {
    currentCorrect = 'ch2';
  }

  // Update visual classes (optional)
  ch1.classList.remove('correct', 'wrong');
  ch2.classList.remove('correct', 'wrong');
  
  if (currentCorrect === 'ch1') ch1.classList.add('correct');
  else ch2.classList.add('correct');

  // (Optional) Update question text here too
  let questions = [
  "What is my name?",
  "What is your favorite color?",
  "Do I prefer cats or dogs?",
  "Am I a good friend?",
  "Whose my best friend?",
  "Are you happy with this gift?",
  "When did we first talk?",
  "What’s my go-to emoji?",
  "uhh click one randomly",
  "Which ex do you prefer more?"
];

let answerSets = [
  { first: "Lee", second: "Abdullah" },
  { first: "Blue", second: "Red" },
  { first: "Cats", second: "Dogs" },
  { first: "yes", second: "no" },
  { first: "Everyone else", second: "Asmaa" },
  { first: "yes very much", second: "I dont care" },
  { first: "many days ago", second: "Exactly 300 days ago" },
  { first: "😐", second: "😭" },
  { first: "that one", second: "this one" },
  { first: "Bush", second: "First ex" }
];

question.innerHTML = questions[count]
ch1.innerHTML = answerSets[count].first
ch2.innerHTML = answerSets[count].second
}

function handleClick(choice) {
  if (choice === currentCorrect) {
    CorrectSound();
    ansCount += 1;
    if (ansCount === 10) {
        ansCount = 0;
        console.log("finiahed")
        COMPLETED()
        return
    }
    rapidFired(ansCount);
  } else {
    question.innerHTML = 'WRONG!!'
    question.style.color = 'red';
    setTimeout(() => {
        failed()
    },1000) 
  }
}

// Only add event listeners once
ch1.addEventListener('click', () => handleClick('ch1'));
ch2.addEventListener('click', () => handleClick('ch2'));

// Start the first round
rapidFired(ansCount);

function timer() {

let timer = document.querySelector('.timer')
let timerSet = [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,'TIME OUTTTT']
timerSet.forEach((ind,i) => {
  setTimeout(() => {
    timer.innerHTML = ind
   },i*1000) 
   setTimeout(() => {
    failed()
   },17000)
})}



function CorrectSound() {
  const sound = new Audio("audio/CorrectReal.mp3");
  sound.play();
}

function COMPLETED() {
    rapidFire.style.display = 'none'
    rapid.style.display = 'flex';
    rapidStartBtn.style.display = 'block'
    window.location.href = "congrats.html";
    console.log('COMPLETED')
}

let realOrder = 25413
let order = document.querySelector('.OrderPuzzle');
function OrderClick() {
    let order = document.querySelector('.OrderPuzzle').value;
    return Number(order)
}

let confirmOrder = document.querySelector('.PhoneOrder')
confirmOrder.addEventListener('click', () => {  
    console.log(OrderClick())
    let Order = OrderClick()
        if (Order === realOrder) {
        order.value =''
        CorrectSound()
        score[1].comp = true;
        store(score)
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