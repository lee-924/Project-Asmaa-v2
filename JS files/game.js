const list = ['....','Initialising game...','Loading...','ERROR ALERT !!', 'Memory corropted.']
let aud = document.querySelector('.startSound')
let aud2 = document.querySelector('.errorSound')
let start = document.querySelector('.startBtn');
let body = document.querySelector('body');
start.addEventListener('click',() => { 
    aud.play()
    window.scrollTo({
        top: 100, // change this number to the height you want
        behavior: 'smooth'})


list.forEach((index,i) => {
    setTimeout(() => {
    let p = `<p> ${index} </p>`
 document.querySelector('.loadingScreen').innerHTML = p
    },i*2000)
    setTimeout(() => {
        body.style.backgroundColor = 'red';
     document.querySelector('.fix').style.display = 'block';
     start.style.display = 'none';
    aud2.play()
    },8000)

})

})

let popup = document.querySelector('.popup')
let fixBtn = document.querySelector('.fix')
fixBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#c44032ff' 
    popup.style.display = 'block';
})

/* POPUP BUTTONS */
let cancel = document.querySelector('.closePopup')
cancel.addEventListener('click',() => {
    popup.style.display= 'none';
})

let aud3 = document.querySelector('.acceptSound');
let accept = document.querySelector('.accept')
accept.addEventListener('click',() => {
    aud3.play()
    setTimeout(() => {
    window.location.href= 'maingame.html';
    },3000)
   
})