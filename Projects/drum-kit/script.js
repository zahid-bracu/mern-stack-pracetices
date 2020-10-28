window.addEventListener('keydown',(e)=>{
    console.log(e.keyCode);
    var sound=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    console.log(sound);
    console.log(key);


    if(!sound){
        console.log("invalid key")
    }else{
        sound.currentTime=0;
        sound.play();
        key.classList.add("playing")
    }
})


window.addEventListener('keyup',(e)=>{ 
    var key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(key);
    key.classList.remove("playing")
})