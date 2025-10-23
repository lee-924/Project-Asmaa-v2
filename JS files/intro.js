let int = document.querySelector('.password')
int.addEventListener('keydown', (keyName) => {
    if (keyName.key === 'Enter') {
        let input = document.querySelector('.empty').value;
        ConfirmFunction(input)
    }
})

let confirm = document.querySelector(".confirm")
confirm.addEventListener('click',() => {
    let input = document.querySelector('.empty').value; 
    ConfirmFunction(input)} )


function ConfirmFunction(input) {
    if (input === "Asmaa") {
    let pass = 'Asmaa'
    localStorage.setItem('pass',JSON.stringify(pass))
    document.querySelector('.empty').value = ''
    document.querySelector('.startAudio').play()
    confirmclick()
    setTimeout(() => {
    window.location.href = 'home.html'
    },10000)

    setTimeout(() => {
        let load = document.querySelector('.load');
        load.style.animationPlayState = "running";
    
    },4000)

    setTimeout(() => {
        let asmaa = document.querySelector('.wel');
        asmaa.innerHTML = "أسماء"
        asmaa.style.animationName = "her";
        asmaa.style.fontFamily = 'Noto Naskh Arabic', 'cursive';
        asmaa.style.animationPlayState = "running";
    },6000)

    let load2 = document.querySelector('.pfp');
    load2.style.animationPlayState = "running";
    let wel = document.querySelector(".wel")
    wel.style.animationPlayState = "running";
    }

    else if (input === "Best Friend") {
        let pass = 'Bsf'
        localStorage.setItem('pass',JSON.stringify(pass))


        document.querySelector('.empty').value = ''
        document.querySelector('.startAudio').play()
        confirmclick()
        setTimeout(() => {
        window.location.href = 'FriendHome.html'
        },10000)

        setTimeout(() => {
        let load = document.querySelector('.load');
        load.style.animationPlayState = "running";
    
    },4000)

    setTimeout(() => {
        let asmaa = document.querySelector('.wel');
        asmaa.innerHTML = "أسماء"
        asmaa.style.animationName = "her";
        asmaa.style.fontFamily = 'Noto Naskh Arabic', 'cursive';
        asmaa.style.animationPlayState = "running";
    },6000)

    let load2 = document.querySelector('.pfp');
    load2.style.animationPlayState = "running";
    let wel = document.querySelector(".wel")
    wel.style.animationPlayState = "running";
    }
    
    

    else {
        alert("Wrong password")
        document.querySelector('.empty').value = '';
    }
   
    } 

    

let credit = document.querySelector('.info')
credit.addEventListener('click', () => {
    let creditdiv = document.querySelector('.creditdiv');
    creditdiv.style.display = 'block';
    close(creditdiv);
}) 

function close(creditdiv) {
    let close = document.querySelector('.close');
    close.addEventListener('click',() => {
    creditdiv.style.display = 'none';  })}

function confirmclick() { 
const container = document.querySelector(".infodiv");
container.innerHTML = ""; 

const yapping = ['initialising efforts....',
    "Scanning our depth of friendship...",
    "Syncing good vibes and epic memories...",
    "Activating Best friendship ever...",
     "Done!"]

yapping.forEach((text, i) => {
  setTimeout(() => {
    container.innerHTML += `<p>${text}</p>`;
  }, i * 1500); 
});

}
let updateDiv = document.querySelector('.update')
let updateBtn = document.querySelector('.updateBtn')
updateBtn.addEventListener('click', () => {
    updateDiv.style.display = 'flex';
})
let cancel = document.querySelector('.cancel')
cancel.addEventListener('click', () => {
    updateDiv.style.display = 'none'
})

let skip = document.querySelector('.skip')
skip.addEventListener('click',() => {
    let pass = 'Bsf'
        localStorage.setItem('pass',JSON.stringify(pass))
    window.location.href = 'FriendHome.html'
})


