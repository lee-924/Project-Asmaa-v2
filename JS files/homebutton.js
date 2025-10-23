let settingBtn = document.querySelector('.setting')
let setDiv = document.querySelector('.settingDiv')
let set = document.querySelector('.setting')


settingBtn.addEventListener('click', () => {
   set.style.display= 'none'
setDiv.style.display = 'block'
 setDiv.style.animationPlayState = 'running';
let close2 = document.querySelector('.close2');
close2.addEventListener('click',() => {
    set.style.display = 'flex';
    setDiv.style.display = 'none' ;
   
})
})


let pass = JSON.parse(localStorage.getItem('pass'))
console.log(pass)

let homeBtn = document.querySelector('.home')

if (pass==='Asmaa') {
    homeBtn.addEventListener('click',() => {
        window.location.href = 'home.html'
    })
}

else if (pass==='Bsf') {
    homeBtn.addEventListener('click', () => {
    window.location.href = 'FriendHome.html'
} )}

let introBtn = document.querySelector('.introBtn')
introBtn.addEventListener('click',() => {
    localStorage.removeItem('pass');
    console.log('cleared')
})