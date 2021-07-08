
let mins = 25;
let secs = 60;
var counter = mins * secs - 1;
var isRunning = false;

let text_view = document.getElementById('textView');
let playBtn = document.getElementById('play');
let resetBtn = document.getElementById('reset');

var my_timer;
var audio;

playBtn.addEventListener('click', function(){
    if(!isRunning){
        my_timer = setInterval(timer, 1000);
        isRunning = true;
    }
    playBtn.classList.add("active");
    resetBtn.classList.remove("active");
})

function timer(){

    if(counter==0){
        audio = new Audio('done.mp3');
        text_view.innerText = "00:00";
        clearInterval(my_timer);
        isRunning = false;
        audio.play();
        return;
    }

    let minutes = Math.floor(counter/secs);
    let seconds = counter % secs;

    seconds = seconds<10? "0" + seconds : seconds;

    if (mins<10){
        text_view.innerText = "0" + minutes + ":" + seconds; 
    }else{
        text_view.innerText = minutes + ":" + seconds; 
    }
    
    counter--;
}

// Add reset functionality
resetBtn.addEventListener('click', function(){
    clearInterval(my_timer);
    isRunning = false;
    text_view.innerText = "25:00";
    counter = mins * secs - 1;
    playBtn.classList.remove("active");
    resetBtn.classList.add("active");
})

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    })
}