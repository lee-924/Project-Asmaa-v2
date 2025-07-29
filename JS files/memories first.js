

let arm = [
    {
        "memory": "lee joins hideout.",
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
        "memory": "My first voice chat",
        "time": "13:05",
        "date": "2024-10-11",
        "disc": "I never and I mean NEVER talk with strangers everr. I was sooo nervous that day I cant even explain, but I am glad I came out of my comfort zone and had a chat, but as you saw ...yep it was not easy 💀😭"
    },
    {
        "memory": "First ever deep yapping session",
        "time": "00:30",
        "date": "2024-10-12",
        "disc": "Well I honestly didnt expect this to be our first deep convo, we were talking about how discord was during 2020, and I was telling my story about it...meh pretty sure we had ALOT better topics in future 😭"
    },
    {
        "memory": "First mentioned you in my diary",
        "time": "00:05",
        "date": "2024-10-17",
        "disc": "lol pretty sure you dont even know this, lmao dont worry I was just introducing you, I really like to keep record of new people coming in my life coz I find it funny in future, thats the reason lol."
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
    },
    {
        "memory": "First message in insta",
        "time": "17:01",
        "date": "2024-11-11",
        "disc": "another butterfly effect...what if I never sent that reel to you that day 😭...well i am GLADDD I DID. even tho our insta journey was very less but that was memorable too, we had the whole fishes era in insta only."
    },
    {
        "memory": "50 days completed.",
        "time": "00:00",
        "date": "2024-11-23",
        "disc": "I dont really know what we did that day because it was in out insta era and insta doesnt have the option to search by time, well either ways I am sure we were not aware of 50 days getting over lol."
    },
    {
        "memory": "First message in whatsapp",
        "time": "20:44",
        "date": "2024-12-05",
        "disc": "I think this was the time I knew yep...your becoming a part of my life officially, and also this whole thing was also crazy to me, exchanging phone numbers? texting in whatsapp?? crazzyyy lol, but I am starting to take it for granted now tsk tsk tsk....gotta start treating you better again lol 😭😭"
    },
    {
        "memory": "Exchanged location with each other.",
        "time": "22:57",
        "date": "2024-12-29",
        "disc": "I dont know what I was thinking but you have to admit it...I trusted you comepletely that time LMFAOAO 😭😭 ,  ...mom said not to give personal info to strangers, meanwhile me : 💀💀 (psst: dont think we are strangers anymore tho lol)"
    },
    {
        "memory": "100 days completed.",
        "time": "00:00",
        "date": "2025-01-12",
        "disc": "lol the funny part is we had no idea it was the 100th day, we talked alot that day tho, I cant even type all that, you had some issue that you never said about lol, and yapped some story about my era of discord in 2020. hehe...the good old days..."
    },
    {
        "memory": "My first voice message",
        "time": "04:41",
        "date": "2025-02-13",
        "disc": "I honestly wanted to reveal my voice in a special way..maybe something like this but I felt bad that you would be waiting for a looong time, and I am glad I did coz sometimes typing be really getting tiring lol, and ofc we wouldnt have such fun moments in vc and roblox and shi, and yes revealing my voice was such a big deal to me coz of how much I hated it..well here we are lmao..."
    },
    {
        "memory": "Jhonny night",
        "time": "02:07",
        "date": "2025-02-14",
        "disc": "lmao idk if you remember this, I was trynna make this guy like you in hideout lol, you asked me to ask his height and everything, It was so funny to me ...well needless to say, it didnt work out lol"
    },
    
]


  a = arm
  final(a);


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

  }
  else{

 
  g.style.display = 'none'
  final(a) }
})
}

