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