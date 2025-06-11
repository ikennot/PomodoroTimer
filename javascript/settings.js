
function addHtml(){
let settings = document.querySelector('.settings-on');
settings.innerHTML=`
<div class="form">
<div class="title">Settings</div>
        <div class="pomodoro-custom">
            <p>Pomodoro</p>
        <input type="number" value="${pomodoro.pomodoroMinutes}" class="pomodoro-Value-js input-value">
        </div>
        
        <div class="short-custom">
           <p>Short break</p>
           <input type="number" value="${pomodoro.restMinutes}" class="short-Value-js input-value">
        </div>
       
        <div class="long-custom">
            <p>Long break</p>
           <input type="number" value="${pomodoro.longRestMinutes}" class="long-Value-js input-value">
        </div>
</div>

        <button class="save-btn">Save</button>
`;
}

function customPomodoro(){
 let pomodoroMin = document.querySelector('.pomodoro-Value-js');
let shortMin = document.querySelector('.short-Value-js');
let longMin = document.querySelector('.long-Value-js');
  let pomodoroTime = Number(pomodoroMin.value);
  let shortTime = Number(shortMin.value);
  let longTime = Number(longMin.value);


  pomodoro.pomodoroMinutes=pomodoroTime;
  pomodoro.longRestMinutes=longTime;
  pomodoro.restMinutes=shortTime;
  
  
({ pomodoroMinutes, restMinutes, longRestMinutes } = pomodoro);

 if(isBreak){
   switch(breaks){
        case 4: 
        minutes = longRestMinutes;
        seconds = 0;
        break;
         default:
         minutes = restMinutes;
   } 
   }else{
   minutes = pomodoroMinutes;
   }
 localStorage.setItem('pomodoro',JSON.stringify(pomodoro));
 displayTime();

}