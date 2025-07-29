let a = JSON.parse(localStorage.getItem("memories"));
let arm = [

] 

if (Array.isArray(a)) {
  if (a.length !== 0) {

    final(a);
  } 
  else if (a.length === 0) {
    a = arm
    localStorage.setItem("memories", JSON.stringify(a));
    final(a);
  }}

else {
  a = arm
  localStorage.setItem("memories", JSON.stringify(a));
  final(a);
} 
;

function call() {
    document.querySelector('.confirm')
     .addEventListener('click',() => {
    let valInput = document.querySelector('.int').value
    if (valInput) {
    let valTime = document.querySelector('.inttime').value
    let valDate = document.querySelector('.intdate').value
    let valdisc = document.querySelector('.textarea').value


    a.push({
        memory: valInput,
        time: valTime,
        date: valDate,
        disc: valdisc});
    final(a) }
    else {alert("Enter a value")}

    })} ;

function final(a) {
    a.sort((one, two) => dayjs(one.date).diff(dayjs(two.date)));
    console.log(a)
    sum = ``
    let id = ["a1","b2","c1","d2",'e1','f2','g1','h2','i1','j2','k1','l2','m1','n2','o1']
    let idnum = 0;
    a.forEach((index,ind) => {
    const side = ind % 2 === 0 ? "left" : "right" ;
     
    let str = `<div class="mem ${side}" id="${id[idnum]}" ><p class="time">${dayjs(index.date + index.time, "YYYY-MM-DD HH:mm").format("YYYY-MMM-DD")} | ${ dayjs("1970-01-01 " + index.time, "YYYY-MM-DD HH:mm").format("hh:mm A")}</p>
    <p class="memory"> ${index.memory}</p></div>`
   
    sum += str
    idnum += 1  
    });

  
    
    let main = document.querySelector('main');
    main.innerHTML = sum+`<div class="line"></div>`;
    let resetInput = document.querySelectorAll('.int, .inttime, .intdate, .textarea');

resetInput.forEach(input => {
  input.value = "";
});
  
localStorage.setItem("memories",JSON.stringify(a)) 
FINALE();}
call();

function FINALE() {
let listen = document.querySelectorAll('.mem');
listen.forEach((mem,i) => {

  mem.addEventListener("click", () => {
  let data = `<div class="popup">
  <p class='memtime'>${dayjs(a[i].date + a[i].time, "YYYY-MM-DD HH:mm").format("YYYY-MMM-DD")}|${dayjs("1970-01-01 " + a[i].time, "YYYY-MM-DD HH:mm").format("hh:mm A")}</p>
  <p class="memtext">${a[i].disc}</p>
      <button class="exit" ;)}">X</button>
      <button class="delete">delete</button>
    </div>`
  let index = a.indexOf(a[i])

  popup(data,index) })
  
 
}) }



function popup(data,index) {
let g = document.querySelector('.popup-box')
g.innerHTML = data
g.style.display = 'block';


let exit = document.querySelector('.exit')
exit.addEventListener("click", () => {
g.style.display = 'none'; })

let del = document.querySelector('.delete');

del.addEventListener("click", () => {
  a.splice(index,1) 
  if (a.length === 0) {

    g.style.display = 'none'
    a = []
    final(a)
    localStorage.setItem("memories",JSON.stringify(a))
  }
  else{
 
  localStorage.setItem("memories",JSON.stringify(a))
 
  g.style.display = 'none'
  final(a) }
})
}

