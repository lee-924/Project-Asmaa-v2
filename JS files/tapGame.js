let counter = document.querySelector(".counter");
let hiddenDiv = document.querySelector(".clickDiv");
let barYap = document.querySelector(".barYap");
let counterr = document.querySelector(".count");
let vari;
let hundreds = 0;
let count = 0;
console.log(count);
let bar = document.querySelector(".bar");
click(count, hundreds);

function click(count, hundreds) {
  if (count) {
    bar.style.display = "block";
    bar.style.height = `${count}%`;
    bar.style.width = `${count}%`;
    counterr.innerHTML = hundreds * 100 + count;
    counter.style.background = "#333";
    barYap.innerHTML = "Tap";
    barYap.style.color = "white";
    counter.style.color = "white";
  }

  vari = function () {
    console.log("log");
    bar.classList.remove("pulse");
    void bar.offsetWidth;
    bar.classList.add("pulse");
    count += 1;
    bar.style.height = `${count}%`;
    bar.style.width = `${count}%`;
    counterr.innerHTML = hundreds * 100 + count;

    if (hundreds * 100 + count === 100) {
      hundred();
    } else if (hundreds * 100 + count === 200) {
      two();
    } else if (hundreds * 100 + count === 300) {
      three();
    }
  };

  counter.addEventListener("pointerdown", vari);
  colorVerify();
}

let text = document.querySelector(".text");
let buttonDiv = document.querySelector('.buttons')
function hundred() {
  buttonDiv.style.display = 'flex'
  hundreds = 1;
  colorVerify();
  hiddenDiv.style.display = "flex";
  hiddenDiv.style.animationPlayState = "running";
  setTimeout(() => {
    text.style.display = 'flex'

  },1000)
  
  let ind = document.querySelector(".firstLine");
  ind.style.display = "flex";
  counter.removeEventListener("pointerdown", vari);

  count = 0;
  click(count, hundreds);
}

let jumpTwo = document.querySelector(".two");
let jumptwoFunc;
jumptwoFunc = function () {
  console.log("lol");
  counter.removeEventListener("pointerdown", vari);
  hundreds = 1;
  count = 99;
  click(count, hundreds);
};
jumpTwo.addEventListener("click", jumptwoFunc);

function two() {
  hundreds = 2;
  colorVerify();
  hiddenDiv.style.display = "flex";
  hiddenDiv.style.animationPlayState = "running";
    setTimeout(() => {
    text.innerHTML = 
    ` <p>Fun fact:</p>
        <p>
          I RAN OUT OF IDEAS TO GIVE HERE <br />
          <br />
          
          just tap till 300 for final message<br />
          <br />
          <br />
          tap till 300 to reveal more 😜
        </p>`
    text.style.display = 'flex'

  },1000)
  let inds = document.querySelector(".secLine");
  inds.style.display = "flex";
  counter.removeEventListener("pointerdown", vari);
  count = 0;
  click(count, hundreds);
}

function three() {
  hundreds = 3;
  colorVerify();
  hiddenDiv.style.display = "flex";
  hiddenDiv.style.animationPlayState = "running";
  setTimeout(() => {
    text.innerHTML = 
    ` <p>Fun fact:</p>
        <p>
          your the bestest friend ever <br />
          <br />
          
          uhh... yea. was gonna add some picture here but<br />
          dont have any time left to do that :( ...coming soon?<br />
          <br />
          GAME OVER (dont tap more or else waste of time) 😜
        </p>`
    text.style.display = 'flex'

  },1000)

  let inds = document.querySelector(".secLine");
  inds.innerHTML = `
<button class="sec b">Jump to 200</button>
<button class="three b">Jump to 300</button>`;

  let jSec = document.querySelector(".sec");
  jSec.addEventListener("click", jumptwoFunc);

  let thirdJump = document.querySelector(".three");

  thirdJump.addEventListener("click", () => {
    hundreds = 2;
    counter.removeEventListener("pointerdown", vari);
    count = 99;
    click(count, hundreds);
  });
  inds.style.display = "flex";
  counter.removeEventListener("pointerdown", vari);
  count = 0;
  click(count, hundreds);
}

function colorVerify() {
  if (hundreds === 0) {
    bar.style.backgroundColor = "#16db65";
  } else if (hundreds === 1) {
    bar.style.backgroundColor = "#0d00a4";
    hiddenDiv.style.backgroundColor = "#16db65";
  } else if (hundreds === 2) {
    bar.style.backgroundColor = "#f15946";
    hiddenDiv.style.backgroundColor = "#0d00a4";
  } else if (hundreds === 3) {
    bar.style.backgroundColor = "#e01a4f";
    hiddenDiv.style.backgroundColor = "#f15946";
  }
}

let cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
  hiddenDiv.style.display = "none";
  hiddenDiv.style.animationPlayState = "paused";
});

let resetCount = document.querySelector(".resetCount");
resetCount.addEventListener("click", () => {
  hundreds = 0;
  console.log("clicked");
  counter.removeEventListener("pointerdown", vari);
  count = 1;
  click(count, hundreds);
});

let jumpHundred = document.querySelector(".hun");
jumpHundred.addEventListener("click", () => {
  hundreds = 0;
  counter.removeEventListener("pointerdown", vari);
  count = 99;
  click(count, hundreds);
});

let home = document.querySelector(".home");
home.addEventListener("click", () => {
  window.location.href = "home.html";
});
