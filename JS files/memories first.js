
let a = JSON.parse(localStorage.getItem("memories"));
let arm = [
    {
        "memory": "Lee joins hideout.",
        "time": "00:38",
        "date": "2024-10-04",
        "disc": "Ladies and gentlemen....your witnessing the beginning of history here. Honestly, I think this is one of the best decisions I ever took in my entire life. To be fair, this whole thing is here just coz i clicked join that day 😝"
    },
    {
        "memory": "DUCKLING ARMY ",
        "time": "13:54",
        "date": "2024-10-07",
        "disc": "haha...our first ever inside joke we made, this is still funny to me ngl, we used to just spam QUACLIFICATIONAL QUA--- ...lol, yes this deserves its own spot here, the time and date refers to the first time we mentioned it."
    },
    {
        "memory": "First time Asmaa texts lee.",
        "time": "23:10",
        "date": "2024-10-07",
        "disc": "Another butterfly effect.... who knew that checking up on someone who took a break for exam can lead to such extent of friendship, lmao..did I ever say you thanks for texting me that day? lol...well THANK YOU VERY MUCHHH 🥳🥳"
    },
    {
        "memory": "Nour Birthday",
        "time": "00:00",
        "date": "2024-11-01",
        "disc": "I never imagined i would see someone across the world grow up with me, lmao she is such a cutipie 🥰, I need a picture of her if your reading this lol. well I dont really know the exact time she was born so I put it as 12am, hope she gets the best future ahead 😝😝"
    },
    {
        "memory": "waterson, nemo, lee..cute lil fishes.",
        "time": "19:13",
        "date": "2024-11-07",
        "disc": "you dont know how much happy I was to even know that someone so far out there named their pet after me, legit the best day of my life probably lmao,  Thank you very much for giving such importance to this random ass guy 🥺🥺"
    }
,
    {
        "memory": "memory number 6",
        "time": "",
        "date": "",
        "disc": "memory number "
    },
    {
        "memory": "memory number 7",
        "time": "",
        "date": "",
        "disc": "memory number "
    },
    {
        "memory": "memory number 8",
        "time": "",
        "date": "",
        "disc": "memory number 8"
    },
    {
        "memory": "memory number 9",
        "time": "",
        "date": "",
        "disc": "memory number "
    },
    {
        "memory": "memory number 9",
        "time": "",
        "date": "",
        "disc": "memory number "
    },
    {
        "memory": "memory number 10",
        "time": "",
        "date": "",
        "disc": "memory number "
    },
    {
        "memory": "memory number 11",
        "time": "",
        "date": "",
        "disc": "memory number "
    },
    {
        "memory": "memory number 12",
        "time": "",
        "date": "",
        "disc": "memory number "
    },
    {
        "memory": "memory number 14",
        "time": "",
        "date": "",
        "disc": "memory number "
    },
    {
        "memory": "memory number 15",
        "time": "",
        "date": "",
        "disc": "memory number "
    }
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

