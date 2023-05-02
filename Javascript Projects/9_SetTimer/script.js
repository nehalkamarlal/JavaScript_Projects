const setMin=document.getElementById('min');
const setSec=document.getElementById('sec');
const min_count=document.getElementById('min-count');
const sec_count=document.getElementById('sec-count');
const start=document.getElementById('start');
const reset=document.getElementById('reset');
const stop=document.getElementById('stop');
const demo=document.getElementById('demo');
setMin.value=prompt('Enter Time In Minutes more than one');
let min=setMin.value;
let clicks=0;
min_count.innerHTML=`${min<=9?'0':''}${min}:`;
 let counts=0;
function Settimer(){            
       if(min>=1 && counts==0){
         min--;
       counts=60;
       setSec.value=`${counts<=9?'0':''}${counts}`;
       }
       sec_count.innerHTML=`${counts<=9?'0':''}${counts}`;
       min_count.innerHTML=`${min<=9?'0':''}${min}:`;
       setSec.value=`${counts<=9?'0':''}${counts}`;
       counts--;
       if(counts<0||min<0)
     {
      clearInterval(mytimer);
      demo.innerHTML='Please Set Timer Period After Refresh the page';
      demo.style.fontSize='2rem';
      demo.style.textAlign='Center';
     } 
       if(min==0 && counts==0)
       {
         min=0;
         counts=0;
         sec_count.innerHTML=`${counts<=9?'0':''}${counts}`;
         min_count.innerHTML=`${min<=9?'0':''}${min}:`;
         setSec.value=`${counts<=9?'0':''}${counts}`;
           clearInterval(mytimer);
       }
     if(counts==0){
        counts=60;
        min--;
        if(min>=0)
        min_count.innerHTML=`${min<=9?'0':''}${min}:`;
        setSec.value=`${counts<=9?'0':''}${counts}`;
     }     
   }
let mytimer=setInterval(Settimer(),1000);
start.addEventListener('click',()=>{
  if(clicks==0){
   mytimer=setInterval(Settimer,1000);
   clicks++;
  }else{
   demo.style.fontSize='2rem';
   demo.style.textAlign='Center';
   demo.innerHTML=`Sorry! Please Click On either Reset or Stop Button`;
  }
  
})
reset.addEventListener('click',()=>{
   clearInterval(mytimer);
   setMin.value=prompt('Enter Time In Minutes more than one');
   min=setMin.value;
   counts=0;
   sec_count.innerHTML=`${counts<=9?'0':''}${counts}`;
   min_count.innerHTML=`${min<=9?'0':''}${min}:`;
   setSec.value=`${counts<=9?'0':''}${counts}`;
     clicks=0;
     demo.innerHTML='';    
     min_count.innerHTML=`${min<=9?'0':''}${min}:`;
     
})
stop.addEventListener('click',()=>{
   clearInterval(mytimer);
   clicks=0;
   demo.innerHTML='';
   setSec.value=`${counts<=9?'0':''}${counts}`;
})
