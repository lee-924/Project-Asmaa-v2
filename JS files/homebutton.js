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