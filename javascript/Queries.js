//display queries
let alarmSound = document.querySelector('.alarmSound');
document.querySelector('.timer-js').textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
document.title =  `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')} - ${strTitle(pomodoroCount)}`;
document.querySelector('.session-info-js').textContent =`${strTitle(pomodoroCount)}`;
let session = document.querySelector('.session');
session.textContent=`#${pomodoroCount}`;

function displayTime(){
    document.querySelector('.timer-js').textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    document.querySelector('.session-info-js').textContent =`${strTitle(pomodoroCount)}`;
       document.title = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')} - ${strTitle(pomodoroCount)}`;   
}