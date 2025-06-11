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


let settingsbtn = document.querySelector('.settings');
settingsbtn.addEventListener('click',()=>{
  document.querySelector('.settings-off').classList.add("settings-on");
  addHtml();
})

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('save-btn')) {
    document.querySelector('.settings-off').innerHTML =``;
    document.querySelector('.settings-off').classList.remove("settings-on");
  }
});
