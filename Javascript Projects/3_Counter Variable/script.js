const container=document.getElementById('container');
const count=document.getElementById('count');
const positive=document.getElementById('positive');
const negative=document.getElementById('negative');
const clear=document.getElementById('clear');

let counts=0;

positive.addEventListener('click',(event)=>{
    count.style.fontSize='8rem';
         counts++;
         count.innerHTML=counts;
})
negative.addEventListener('click',(event)=>
{
    if(counts>0)
    {
        count.style.fontSize='8rem';
        counts--;
    count.innerHTML=counts;
    }
    else{
        count.style.fontSize='20px';
        count.innerHTML='Sorry! Only For Positive number';
    }
 
})
clear.addEventListener('click',(event)=>{
    count.style.fontSize='8rem';
    count.innerHTML=0;
    counts=0;
})
function UpdateCount(value){
    count.innerHTML=value;
}