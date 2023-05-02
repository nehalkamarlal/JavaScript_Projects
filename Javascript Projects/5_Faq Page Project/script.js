const faq=document.getElementById('faq');
                const faq_f=document.getElementById('faq-1');
                const faq_s=document.getElementById('faq-2');
                const inputpartF=document.getElementById('input-part-1');
                const inputpartS=document.getElementById('input-part-2');
                const inputpartT=document.getElementById('input-part-3');
                const classesF=document.getElementById('active-main-1');
                const classesS=document.getElementById('active-main-2');
                const classesT=document.getElementById('active-main-3');
                const checkF=document.getElementById('check-1');
                const checkS=document.getElementById('check-2');
                const checkT=document.getElementById('check-3');
                const paraF=document.getElementById('paras-1');
                const paraS=document.getElementById('paras-2');
                const paraT=document.getElementById('paras-3');
                   faq.addEventListener('click',()=>{
                         classesF.classList.add('active')
                   })
                  
                   checkF.addEventListener('click',()=>{
                    
                    const textF=inputpartF.value;
                    console.log(textF);
                        let len=textF.length;
                        console.log(len);
                        if(len>0){
                            paraF.innerHTML=textF;
                            classesF.classList.remove('active');                          
                            console.log(paraF.innerHTML);
                            paraF.classList.add('active');
                        }
                        else{
                            paraF.innerHTML=`please write!`;
                            classesF.classList.remove('active');                          
                            console.log(paraF.innerHTML);
                            paraF.classList.add('active');
                        }
                   })
                   faq_f.addEventListener('click',()=>{
                         classesS.classList.add('active')
                   })
                  
                   checkS.addEventListener('click',()=>{
                    
                    const textS=inputpartS.value;
                    console.log(textS);
                        let len=textS.length;
                        console.log(len);
                        if(len>0){
                            paraS.innerHTML=textS;
                            classesS.classList.remove('active');                          
                            console.log(paraS.innerHTML);
                            paraS.classList.add('active');
                        }
                        else{
                            paraS.innerHTML=`please write!`;
                            classesS.classList.remove('active');                          
                            console.log(paraS.innerHTML);
                            paraS.classList.add('active');
                        }
                   })
                   faq_s.addEventListener('click',()=>{
                         classesT.classList.add('active')
                   })
                  
                   checkT.addEventListener('click',()=>{
                    
                    const textT=inputpartT.value;
                    console.log(textT);
                        let len=textT.length;
                        console.log(len);
                        if(len>0){
                            paraT.innerHTML=textT;
                            classesT.classList.remove('active');                          
                            console.log(paraT.innerHTML);
                            paraT.classList.add('active');
                        }
                        else{
                            paraT.innerHTML=`please write!`;
                            classesT.classList.remove('active');                          
                            console.log(paraT.innerHTML);
                            paraT.classList.add('active');
                        }
                   })