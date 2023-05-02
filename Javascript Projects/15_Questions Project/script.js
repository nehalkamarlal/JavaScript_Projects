const plusF=document.getElementById('plus-1');
        const plusS=document.getElementById('plus-2');
        const plusT=document.getElementById('plus-3');
        const minusF=document.getElementById('minus-1');
        const minusS=document.getElementById('minus-2');
        const minusT=document.getElementById('minus-3');
        const BoxContainerF=document.getElementById('box-container-1');
        const BoxContainerS=document.getElementById('box-container-2');
        const BoxContainerT=document.getElementById('box-container-3');

        plusF.addEventListener('click',()=>{
               BoxContainerF.classList.add('active');
               plusF.classList.add('active-1');
               minusF.classList.add('active');
        })

        minusF.addEventListener('click',()=>{
            BoxContainerF.classList.remove('active');
            minusF.classList.remove('active');
            plusF.classList.remove('active-1');
        })
        plusS.addEventListener('click',()=>{
               BoxContainerS.classList.add('active');
               plusS.classList.add('active-1');
               minusS.classList.add('active');
        })

        minusS.addEventListener('click',()=>{
            BoxContainerS.classList.remove('active');
            minusS.classList.remove('active');
            plusS.classList.remove('active-1');
        })
        
        plusT.addEventListener('click',()=>{
               BoxContainerT.classList.add('active');
               plusT.classList.add('active-1');
               minusT.classList.add('active');
        })

        minusT.addEventListener('click',()=>{
            BoxContainerT.classList.remove('active');
            minusT.classList.remove('active');
            plusT.classList.remove('active-1');
        })