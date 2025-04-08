{/* <i class="fa-solid fa-xmark"></i>
<i class="fa-regular fa-circle"></i> */}
const container = document.querySelector('.container');
const gameBox = document.querySelector('.game-box')
const box = document.querySelectorAll('.box')
const button = document.querySelector('button')

const arr =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let player=0,win=0;
gameBox.addEventListener('click',(e)=>{
if(e.target.textContent=="" && win==0){
e.target.textContent=player==1?`o`:`x`;
check();
player=!player;}
})

const check = ()=>{
    arr.forEach(ele=>{
        if(gameBox.children[ele[0]].textContent!="" && gameBox.children[ele[0]].textContent==gameBox.children[ele[1]].textContent && gameBox.children[ele[0]].textContent==gameBox.children[ele[2]].textContent){
            const winner = document.createElement('div');
            winner.classList.add('winner');
            winner.textContent=`Player ${gameBox.children[ele[0]].textContent=='o'?"2":"1"} wins!!!`;
            winner.style.cssText="color:white; font-weight:bold; width:100%; margin:10px; font-size:20px; text-align:center"
            gameBox.appendChild(winner);
            win=1;
        }
    })
}
button.addEventListener('click',()=>{
    player=0;
    win=0
    for(let i=0;i<9;i++){
        gameBox.children[i].textContent="";
    }
    gameBox.removeChild(document.querySelector('.winner'));
})