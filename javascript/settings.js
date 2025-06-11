
function addHtml(){
let settings = document.querySelector('.settings-on');
settings.innerHTML=`
<div class="form">
<div class="title">Settings</div>
        <div class="pomodoro-custom">
            <p>Pomodoro</p>
        <input type="number" value="25" class="pomodoro-Value-js input-value">
        </div>
        
        <div class="short-custom">
           <p>Short break</p>
           <input type="number" value="5" class="short-Value-js input-value">
        </div>
       
        <div class="long-custom">
            <p>Long break</p>
           <input type="number" value="15" class="long-Value-js input-value">
        </div>
</div>

        <button class="save-btn">Save</button>
`;
}

