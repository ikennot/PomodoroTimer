let pomodoro = {
    seconds : 0,
    pomodoroMinutes : 25,
    restMinutes : 5,
    longRestMinutes : 15,
    pomodoroCount : 1,
    countdown : 0,
    isrunning :  false,
    ispaused : true,
    isFinished : true,
    isBreak : false,
    breaks : 1

};

//object converted into variables
let{seconds,pomodoroMinutes,restMinutes,longRestMinutes,pomodoroCount,countdown,isrunning,ispaused,isBreak,breaks} = pomodoro;
let minutes = pomodoroMinutes;

function TimerSet() {
    if(!isBreak)
    {
        switch(breaks){
        case 4: 
        minutes = longRestMinutes;
        seconds = 0;
        breaks = 1;
        break;
        default:
         minutes = restMinutes;
         breaks++;
        }
           isBreak = true;
           pomodoroCount++;
    }else{
     minutes = pomodoroMinutes;
     seconds = 0;
     isBreak = false;
     document.querySelector(`.c${pomodoro.breaks}`).classList.add("started");

    }
}
let strTitle = (isBreak)=>{
   if(isBreak)
   {
      return 'BREAK TIME!';
   } else {
      return 'FOCUS SESSION';
   }
}



//reset count
function reset() {
       session.textContent=`#${pomodoroCount}`;
       isrunning = false;
         isFinished = true;
        clearInterval(countdown);
        TimerSet();
        displayTime();
        document.querySelector('.start-btn-js').innerHTML =`<img src="img/play.png">`;
        
}


//counting mechanism
function counting(){
    
    if(!isrunning)
    {
     isrunning=true;
     ispaused = false;
     isFinished = false;
     document.querySelector('.start-btn-js').innerHTML =`<img src="img/pause.png">`;
     countdown = setInterval(()=>{
     if(seconds === 0){
              minutes--;
              seconds = 59;
     }else
     seconds--;
      displayTime();
         if(minutes === 0 && seconds === 0)
    {
        reset();
        alarmSound.play();
        return;
    }

  },10);
    }else{
       isrunning=false;
        ispaused = true;
        clearInterval(countdown);
        document.querySelector('.timer-js').textContent=`${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
        document.querySelector('.start-btn-js').innerHTML=`<img src="img/play.png">`;        
    }
   





}
