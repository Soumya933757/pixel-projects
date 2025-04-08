const container = document.querySelector('.container');
const notes = document.querySelector('.notes');
const addbutton = document.querySelector('.add');
const noteBox = document.querySelector('.note-box');
const textArea = document.querySelector('textarea');

let flag = 1;
addbutton.addEventListener('click', () => {
 
   if(textArea.value!=""){ const note = document.createElement('div');
    const btn = document.createElement('button');
    note.textContent=textArea.value;
    textArea.value="";
    note.style.cssText="width:25%; height:33%;  scrollbar-width: none;  overflow:scroll; position:relative; padding:20px; display:flex; word-break:break-all;"
    if(flag) note.style.backgroundColor="#d1e1ff";
    else note.style.backgroundColor="#fefffe"
    flag=!flag;
    btn.textContent = "x";
    btn.classList.add("delete")
    btn.style.cssText = "  all: unset; color:white; align-text:center; display:flex; justify-content:center; background-color:red; width:20px; height:20px; outline:none; position:absolute; top:5px; right:5px;";

    note.appendChild(btn);
    notes.appendChild(note);}
});

notes.addEventListener('click', (e) => {
if(e.target.classList.contains("delete"))e.target.parentNode.remove();
});