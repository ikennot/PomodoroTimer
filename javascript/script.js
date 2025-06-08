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
    breaks : 0

};

let{seconds,pomodoroMinutes,restMinutes,longRestMinutes,pomodoroCount,countdown,isrunning,ispaused,isBreak,breaks} = pomodoro;
let minutes = pomodoroMinutes;

function TimerSet() {
    if(!isBreak)
    {
        switch(breaks){
        case 4: minutes = longRestMinutes;
        breaks = 0;
        break;
        default:
         minutes = restMinutes;
         breaks++;
        }
           isBreak = true;
           pomodoroCount++;
    }else{
     minutes = pomodoroMinutes;
     isBreak = false;
    }
}
let strTitle = (pomodoroCount)=>{
   if(pomodoroCount % 2 == 0)
   {
      return 'Break Time!';
   } else {
      return 'Time to focus!';
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
        document.querySelector('.start-btn-js').textContent =`start`;
}


//counting mechanism
function counting(){
    if(!isrunning)
    {
     isrunning=true;
     ispaused = false;
     isFinished = false;
     document.querySelector('.start-btn-js').textContent =`Pause`;
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
        document.querySelector('.start-btn-js').textContent='resume';        
    }
   





}
