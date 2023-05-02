const time_1=document.getElementById('time-1');
const time_2=document.getElementById('time-2');
const time_3=document.getElementById('time-3');
const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');
const error=document.getElementById('error');
  

let count=00;
let min=00;
let hour=00;
let clicks=0;
function setTimer(){            
    time_1.innerHTML=`${hour<=9?'0':' '}${hour}:`;
    time_2.innerHTML=`${min<=9?'0':''}${min}:`;
    time_3.innerHTML=`${count<=9?'0':''}${count}`;
    count++;
    if(count==60){
        count=0;
        min++;
    }
    if(min==60)
    {
        min=0;
        hour++;
    }
}
let mytimer=setInterval(setTimer(),1000);
function openTimer(dddd){
     mytimer=setInterval(setTimer,1000);
   }
 start.addEventListener('click',()=>{
    if(clicks==0){
        openTimer();
        clicks++;
    }
    else{
         error.innerHTML=`Not Click More Than Once Time Please click stop or reset`;
    }
})
stop.addEventListener('click',()=>{
    clearInterval(mytimer);
    clicks=0;
    error.innerHTML="";
})
reset.addEventListener('click',()=>{
    count=00;
    min=00;
    hour=00;
    time_1.innerHTML=`${hour<=9?'0':' '}${hour}:`;
    time_2.innerHTML=`${min<=9?'0':''}${min}:`;
    time_3.innerHTML=`${count<=9?'0':''}${count}`;
    error.innerHTML=""
    clearInterval(mytimer);
    clicks=0;
})
