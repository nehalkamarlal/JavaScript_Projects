const box=document.getElementById('box');
const red=document.getElementById('red');
const green=document.getElementById('green');
const yellow=document.getElementById('yellow');
const blue=document.getElementById('blue');
const clear=document.getElementById('clear');

red.addEventListener('click',()=>{
    box.style.backgroundColor='red';
    box.style.color='Black';
    box.innerHTML='Red';
})
blue.addEventListener('click',()=>{
    box.style.backgroundColor='blue';
    box.style.color='Black';
    box.innerHTML='Blue';
})
yellow.addEventListener('click',()=>{
    box.style.backgroundColor='yellow';
    box.style.color='Black';
    box.innerHTML='Yellow';
})
green.addEventListener('click',()=>{
    box.style.backgroundColor='green';
    box.style.color='Black';
    box.innerHTML='Green';
})
clear.addEventListener('click',()=>{
    box.style.backgroundColor='black';
    box.style.color='white';
    box.innerHTML='Clear';
})