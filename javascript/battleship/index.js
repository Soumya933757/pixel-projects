const container = document.querySelector('.container');
const gameBox = document.querySelector('.game-box')
const box = document.querySelectorAll('.box')
const button = document.querySelector('button')
let chances=7,score=5;
const shuffle=()=>{
    const arr=Array.from(gameBox.children);
    console.log(arr)
    for(let i=0;i<arr.length;i++){
        const randomIndex=Math.floor(Math.random() * (15 - 0 + 1)) + 0;
        let indexOne = arr[i];
        arr[i]=arr[randomIndex];
        arr[randomIndex]=indexOne;
    }
    arr.forEach(child=>gameBox.appendChild(child));
}

 document.addEventListener('DOMContentLoaded',()=>{
    shuffle()
    score=5;
    chances=7;
 })
 button.addEventListener('click',(e)=>{
    e.stopPropagation();
    shuffle()
    chances=7;
    score=5;
    box.forEach(child=>child.children[0].style.visibility="hidden");
 })

 gameBox.addEventListener('click',(e)=>{
 e.stopPropagation();
if(chances>0){
    chances--;
    e.target.children[0].style.visibility="visible";
    if(e.target.children[0].getAttribute("src")=="./assets/ship.png"){
        score--;
        if(score==0)alert("You Won!")
    }
if(chances==0)alert("you lose!")
}
 })