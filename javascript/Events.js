let startbtn = document.querySelector('.start-btn-js');
startbtn.addEventListener('click',()=>{
    counting();
})


let nextbtn = document.querySelector('.next-btn-js');
nextbtn.addEventListener('click',()=>{
  seconds = 0;
  reset();
})


let longbtn = document.querySelector('.long-btn-js');
longbtn.addEventListener('click',()=>{
    longBreak();
})