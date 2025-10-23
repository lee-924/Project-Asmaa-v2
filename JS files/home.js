let ps = JSON.parse(localStorage.getItem('pass'))
let boxy = document.querySelector('.bx5')
if (ps==='Bsf') {
    if (window.innerWidth<900) {
    boxy.id= 'box4' }
    else {
    boxy.id = 'box5'
    }
}

function updateTime() {

document.querySelector('.time').innerHTML = dayjs().format('hh:mm:ss a');
document.querySelector('.date').innerHTML = dayjs().format('DD MMMM YYYY');
}


updateTime();
setInterval(updateTime,1000)

let credit = document.querySelector('.credit')

credit.addEventListener('click', () => {
    let creditdiv = document.querySelector('.creditdiv');
    creditdiv.style.display = 'block';
    close(creditdiv);
})

function close(creditdiv) {
    let close = document.querySelector('.close');
    close.addEventListener('click',() => {
    creditdiv.style.display = 'none';  })}



let body = document.querySelector('body')
let boxes = document.querySelectorAll('.box')
let fuck = document.getElementById('themeToggle');
fuck.addEventListener('change', () => {
    ThemePage()
});

function ThemePage() {
 if (fuck.checked) {
  body.style.backgroundImage = 'radial-gradient(#5b0101,#280101)';
  boxes.forEach((ind) => {
     ind.style.backgroundColor = '#6d0101'

    let red = 'red'
    localStorage.setItem('Theme',JSON.stringify(red))

  })   

}
    else { 
        body.style.backgroundImage = 'radial-gradient(#0c0269,#07004d)'
        boxes.forEach((ind) => {
            ind.style.backgroundColor = '#0c0269' 
            let blue = 'blue'
            localStorage.setItem('Theme',JSON.stringify(blue))

        })
   
    }
}

let theme = JSON.parse(localStorage.getItem('Theme'))
console.log(theme)
if (theme === 'red') {
    fuck.checked = true;
    ThemePage()
}
else if (theme === 'blue') {
    fuck.checked = false;
    ThemePage()
}


let friendbtn = document.querySelector('.FriendModeBtn')
friendbtn.addEventListener('click',() => {
    let pss = 'Bsf'
    localStorage.setItem('pass',JSON.stringify(pss))
    window.location.href = 'FriendHome.html'
})