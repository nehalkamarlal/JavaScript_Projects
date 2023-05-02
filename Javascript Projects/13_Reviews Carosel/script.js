const reviews=[
    {
       id:"1",
       img:"images0.jpg",
       name:"Nehal Kumar Lal",
       job:"Web Devloper",
       info:"Web Developers design and update websites and online applications using various programming languages and design tools. A regular example resume for this job mentions responsibilities such as creating webpage layouts, writing code, editing website content, and making adjustments based on client feedback."

    },
    {
       id:"2",
       img:"Images2.jpeg",
       name:"Ankit Kumar Shrivastava",
       job:"UI/UX Designer",
       info:"UI UX  design and update websites and online applications using various programming languages and design tools. A regular example resume for this job mentions responsibilities such as creating webpage layouts, writing code, editing website content, and making adjustments based on client feedback."

    },
    {
       id:"3",
       img:"images3.jpeg",
       name:"Arohi Karn",
       job:"App Devloper",
       info:"App Devloper design and update websites and online applications using various programming languages and design tools. A regular example resume for this job mentions responsibilities such as creating webpage layouts, writing code, editing website content, and making adjustments based on client feedback."

    },
    {
       id:"4",
       img:"images4.jpeg",
       name:"Kanishka Kumari",
       job:"System Designer",
       info:"System Designer design and update websites and online applications using various programming languages and design tools. A regular example resume for this job mentions responsibilities such as creating webpage layouts, writing code, editing website content, and making adjustments based on client feedback."

    },
]
const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');

const Img=document.getElementById('myimg');
const author=document.getElementById('author');
const job=document.getElementById('job');
const infos=document.getElementById('infos');


let currentItem=0;
window.addEventListener('DOMContentLoaded',function(){
   showPerson();
})
function showPerson(){
   let Item=reviews[currentItem];
   Img.src=Item.img;
   author.textContent=Item.name;
   job.textContent=Item.job;
   infos.innerHTML=Item.info;
}
randomBtn.addEventListener('click',function(){
   currentItem=Math.floor(Math.random()* reviews.length);
   showPerson();
})
prevBtn.addEventListener('click',()=>{
   currentItem--;
   if(currentItem<0){
       currentItem=reviews.length-1;
   }
   showPerson();
})
nextBtn.addEventListener('click',()=>{
   currentItem++;
   if(currentItem>reviews.length-1){
       currentItem=0;
   }
   showPerson();
})
