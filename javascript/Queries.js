//display queries
let alarmSound = document.querySelector('.alarmSound');
document.querySelector('.timer-js').textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
document.title =  `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')} - ${strTitle(isBreak)}`;
document.querySelector('.session-info-js').textContent =`${strTitle(isBreak)}`;
let session = document.querySelector('.session');

function displayTime(){
    document.querySelector('.timer-js').textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    document.title = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')} - ${strTitle(isBreak)}`;  
      document.querySelector('.session-info-js').textContent =`${strTitle(isBreak)}`; 
      
}