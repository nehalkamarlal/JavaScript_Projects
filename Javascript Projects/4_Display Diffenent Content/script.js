const history=document.getElementById('history');
const vision=document.getElementById('vision');
const goals=document.getElementById('goals');
const Img=document.getElementById('myimg');
const Heading=document.getElementById('heading-tag');
const Paragraph=document.getElementById('paragraph-tag');
const ownpara=document.getElementById('ownpara');  
const imgset=document.getElementById('left-side') ;
    history.addEventListener('click',()=>{
       
        Heading.innerHTML='History';
        Paragraph.innerHTML=ownpara.innerHTML;
        history.classList.add('active');
        goals.classList.remove('active');
        vision.classList.remove('active');
        imgset.style.backgroundImage="url('img2.jpg')";
    })
    vision.addEventListener('click',()=>{
        Heading.innerHTML='Vision';
        Paragraph.innerHTML=` Here We See Our vision to see Nature.${ownpara.innerHTML}`;
        vision.classList.add('active');
        history.classList.remove('active');
        goals.classList.remove('active');
        imgset.style.backgroundImage="url('img1.jpg')";
    })
    goals.addEventListener('click',()=>{
           Heading.innerHTML='Goal';
           Paragraph.innerHTML=`Goal To  Safe The Nature ${ownpara.innerHTML} `;
           goals.classList.add('active');
           history.classList.remove('active');
           vision.classList.remove('active');
           imgset.style.backgroundImage="url('img3.jpg')";
    })