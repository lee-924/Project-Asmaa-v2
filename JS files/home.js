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
    if (fuck.checked) {
  body.style.backgroundImage = 'radial-gradient(#5b0101,#280101)';
  boxes.forEach((ind) => {
    ind.style.backgroundColor = '#6d0101'
  })   

}
    else { 
        body.style.backgroundImage = 'radial-gradient(#0c0269,#07004d)'
        boxes.forEach((ind) => {
            ind.style.backgroundColor = '#0c0269'
        })
   
    }
});