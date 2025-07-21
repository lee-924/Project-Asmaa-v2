let but = document.querySelector('.reveal')
but.addEventListener('click',() => {
    document.querySelector('.revealSound').play()
    console.log('hello')
    setTimeout(() => {let poem = document.querySelector('.poem');
        poem.style.display = 'block';
        poem.style.animationPlayState = 'running';
        setTimeout(() => {
            document.querySelector('.foot').style.display = 'block'
        },5000)

    },23000) 

    
    document.querySelector('body').style.height = '800vh'; 
    window.scrollTo({
      top: 450, // change this number to the height you want
      behavior: 'smooth' })
    document.querySelector('.blackbox').style.animationPlayState = 'running'
    revealClick()
})

function revealClick() {
    list = [`'>ok hear goes nothing....`,`'> A handwritten poem just for you`,`'>Took me 7 days to write this`,,`'> Get ready for....`,` title'> what a miserable day, please dont go away`]
    list.forEach((index,i) => {
        let button = document.querySelector('.button')
       
        setTimeout(() => { button.innerHTML = `<p class='loading ${index} </p> <br />`},i*4000)
    })
}