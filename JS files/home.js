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


/* let settingBtn = document.querySelectorAll('.comingSoon')
let setDiv = document.querySelector('.settingDiv')
let set = document.querySelector('.setting')


settingBtn.forEach((ind,i) => 
    ind.addEventListener('click', () => {
   set.style.display= 'none'
setDiv.style.display = 'block'
 setDiv.style.animationPlayState = 'running';
let close2 = document.querySelector('.close2');
close2.addEventListener('click',() => {
    set.style.display = 'flex';
    setDiv.style.display = 'none' ;
   
})
}) ) */