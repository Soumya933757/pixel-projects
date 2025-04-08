const container=document.querySelector('.container')
const calcBox = document.querySelector('.calc-box')
const screen = document.querySelector('.screen')
const keyBox = document.querySelector('.key-box')
const box=document.querySelectorAll('.box')

let result="";

keyBox.addEventListener('click',(e)=>{
   if(e.target.classList.contains('box')){ 
    if(e.target.textContent=='='){
        screen.textContent=eval(result);
    }
    else if(e.target.textContent=='C'){
        result="";
        screen.textContent=result;
    }
    else if(e.target.textContent=='Del'){
        result=result.slice(0,result.length-1)
        screen.textContent=result;}
    else if(e.target.textContent=='Exp'){
        result+="**";
        screen.textContent=result;
    }
    else {result+=e.target.textContent;
    screen.textContent=result;}
}
})
