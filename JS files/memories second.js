let arm = [
  {
        "memory": "your grandma passed away",
        "time": "18:57",
        "date": "2025-02-20",
        "disc": "It was my first time dealing with someone who actually had their closest person pass away, so my reaction to it might not have been good, I apologize for that. I hope she makes it to heaven ameen."
    }, 
  {
        "memory": "200 days completed.",
        "time": "00:00",
        "date": "2025-04-22",
        "disc": "lol that day I was busy with my driving license. only talked about that lol. I would have wished happy 200th day if I knew 😭😭 "
    },
    {
        "memory": "My birthday",
        "time": "00:00",
        "date": "2025-04-25",
        "disc": "haha how funny, talking about my bday on yours, well you cant even fathom how much happy you made me that day, as yk it was a very rough time for me, THANK YOU VERY VERY VERY MUCH for the support that time, I really needed it and you gave without any hesitation. also I started working on this porject way before my bday lol, I am pretty sure I will make a video talking about it, dw you will see it soon. ..thank you once again. ✨"
    },
    {
        "memory": "Texted your ex",
        "time": "18:47",
        "date": "2025-04-26",
        "disc": "I honestly dont know what to say...I mean its something about you so I just thought you would find it precious to see it here lol... either ways I am happy your doing well now."
    },
    {
        "memory": "Relationship with bush",
        "time": "00:46",
        "date": "2025-05-04",
        "disc": "hehehe...it was very unexpected tbh 😭 idk what even happened in those two weeks lol. also now you should know what does \"stop beating around the bush\" means in the poem 😝"
    },
    {
        "memory": "Breakup with bush",
        "time": "17:13",
        "date": "2025-05-23",
        "disc": "you stopped beating around the bush. "
    },
    {
        "memory": "Introduction to nishy",
        "time": "17:45",
        "date": "2025-05-27",
        "disc": "I mean idk what to say about her here...uhh hope yall liked playing roblox with each other, yk I dont wanna have a history of introducing bad friends yk... 💀💀"
    },
    {
        "memory": "Scribbl with mf ",
        "time": "19:46",
        "date": "2025-05-31",
        "disc": "hahaha.... all shit aside it was kinda fun honeslty, it is a special memory regardless of all that at the end, really enjoyed playing with both of you 😝😝"
    },
    {
        "memory": "vc with you and mf",
        "time": "20:15",
        "date": "2025-06-01",
        "disc": "what ? this memory didnt happen? I wonder why 😆 , lol jokes aside i just had to include it here coz it had such a huge impact in my life lmao... yk all bs aside, I learned alot about myself so in a way I am glad it happened, as promised, I wont be talking about this anymore 😭"
    },
    {
        "memory": "300 days completed.",
        "time": "00:38",
        "date": "2025-07-31",
        "disc": "yes...your seeing this right. Today on your birthday, our 300th day of friendship also started. This whole page is actually made for us to look into what we did in the past which I thought would be a great idea for the 300th day and also..your special birthday. HAPPY 300th DAY !!"
    },
    {
        "memory": "Asmaa birthday",
        "time": "00:00",
        "date": "2025-07-31",
        "disc": "uhh ...happy birthday 😛 "
    },
    {
        "memory": "Project Completed",
        "time": "23:00",
        "date": "2025-10-23",
        "disc": `One of the best experience of my life and I am sure, it was for you as well. But every good thing remains good when it comes to an end. Thank you for being the reason for this amazing journey. I hope I gave you something worth remembering. One last goodbye from your one and only <span class='lee'> Lee</span>`
    }
    
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

