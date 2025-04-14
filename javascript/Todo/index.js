const search = document.querySelector('.search')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')
const submitBtn = document.querySelector('.submit-btn')
const dueBox = document.querySelector('.due-box')
const todayBox = document.querySelector('.today-box')
const upcomingBox = document.querySelector('.upcoming-box')
const container = document.querySelector('.container')
const dueTasks = document.querySelector('.due-tasks')
const todayTasks = document.querySelector('.today-tasks')
const upcomingTasks = document.querySelector('.upcoming-tasks')
const searchOutput = document.querySelector('.search-output');

const searchTodo = () => {
searchOutput.innerHTML = ""
if(search.value){ 
 const value = search.value.toLowerCase();
 const data = [];
 const data1 = JSON.parse(localStorage.getItem("dueTasks"))
 const data2 = JSON.parse(localStorage.getItem("todayTasks"))
 const data3 = JSON.parse(localStorage.getItem("upcomingTasks"))
 data1.forEach(ele=>{
    if(ele.todo.toLowerCase().includes(value))data.push(ele)
 })
 data2.forEach(ele=>{
    if(ele.todo.toLowerCase().includes(value))data.push(ele)
 })
 data3.forEach(ele=>{
    if(ele.todo.toLowerCase().includes(value))data.push(ele)
 })
data.forEach(ele=>{
    searchOutput.appendChild(displayData(ele.todo,ele.date,ele.time))
})}
}

const addTodo = ()=>{
    const todo = input1.value;
    const date = new Date(input2.value+','+input3.value).toLocaleDateString();
    const time = new Date(input2.value+','+input3.value).toLocaleTimeString();
    if(!input1.value || !input2.value || !input3.value){
        const mainDiv = document.createElement('div')
        mainDiv.style.cssText = "width:100vw; position:absolute; height:100vh; background-color: rgba(128, 128, 128, 0.5); display:flex; align-items:center;top:0;left:0; justify-content:center; backdrop-filter: blur(5px);"
        const div = document.createElement('div')
        div.innerHTML=`<p>Please fill in all fields.</p>
        <button class="ok-btn" style="background-color:lime; color:white; border-radius:5px; padding:5px 20px; font-weight:bold;">OK</button>`
        div.style.cssText = "display:flex;border:1px solid; background-color:white; padding:20px; flex-direction:column;width:30%;height:13%; align-items:center;gap:10px; border-radius:10px; "
        mainDiv.appendChild(div)
        container.appendChild(mainDiv)
        const okBtn = document.querySelector('.ok-btn')
        okBtn.addEventListener('click',(e)=>{
        e.stopPropagation();
        mainDiv.remove();
        })
    }
    else {
        if(new Date(input2.value+','+input3.value)<new Date()){
        dueBox.appendChild(displayData(todo,date,time))
        const data = JSON?.parse(localStorage.getItem('dueTasks')) || [];
        data.push({date,time,todo})
        localStorage.setItem("dueTasks",JSON.stringify(data))
        }
        else if(new Date(input2.value).getDate()>new Date().getDate()){
            upcomingBox.appendChild(displayData(todo,date,time))
            const data = JSON?.parse(localStorage.getItem('upcomingTasks')) || [];
            data.push({date,time,todo})
            localStorage.setItem("upcomingTasks",JSON.stringify(data))
        }
        else {
            todayBox.appendChild(displayData(todo,date,time))
            const data = JSON?.parse(localStorage.getItem('todayTasks')) || [];
            data.push({date,time,todo})
            localStorage.setItem("todayTasks",JSON.stringify(data))
        }
        location.reload()
    }
}

const editTodo = (todo,date,time)=>{
const dateTime = new Date(date+","+time)
const mainDiv = document.createElement('div')
mainDiv.style.cssText = "width:100vw; position:absolute; height:100vh; background-color: rgba(128, 128, 128, 0.5); display:flex; align-items:center;top:0;left:0; justify-content:center; backdrop-filter: blur(5px);"
const div = document.createElement('div')
div.innerHTML = `<h1>Edit Todo</h1>
<input class="edit-todo" type="text" value=${todo}>
<input class="edit-date" type="date" value=${dateTime.toISOString().slice(0, 10)}>
<input class="edit-time" type="time" value=${dateTime.toTimeString().slice(0, 5)}>
<button class="edit-btn">Edit</button>`
div.style.cssText = "display:flex;border:1px solid; background-color:white; padding:20px; flex-direction:column;width:40%;height:30%; align-items:center;gap:10px; border-radius:10px; "
mainDiv.appendChild(div)
container.appendChild(mainDiv)
const editBtn = document.querySelector('.edit-btn')
const editTodo =  document.querySelector('.edit-todo')
const editDate =  document.querySelector('.edit-date')
const editTime =  document.querySelector('.edit-time')
editBtn.addEventListener('click',(e)=>{
e.stopPropagation()
const editedDateTime = new Date(editDate.value+","+editTime.value)
const editedTodo = editTodo.value
const editedDate = editedDateTime.toLocaleDateString()
const editedTime = editedDateTime.toLocaleTimeString()
if(todo!==editedTodo || date!==editedDate || time!==editedTime){
if(editedDateTime<new Date()){
   const data = JSON.parse(localStorage.getItem("dueTasks"))
   data.push({todo:editedTodo,date:editedDate,time:editedTime})
   localStorage.setItem('dueTasks',JSON.stringify(data))
   deleteTodo(todo,date,time);
   location.reload()
}
else if(editedDateTime.getDate()>new Date().getDate()){
   const data = JSON.parse(localStorage.getItem("upcomingTasks"))
   data.push({todo:editedTodo,date:editedDate,time:editedTime})
   localStorage.setItem('upcomingTasks',JSON.stringify(data))
   deleteTodo(todo,date,time);
   location.reload()
}
else{
   const data = JSON.parse(localStorage.getItem("todayTasks"))
   data.push({todo:editedTodo,date:editedDate,time:editedTime})
   localStorage.setItem('todayTasks',JSON.stringify(data))
   deleteTodo(todo,date,time);
   location.reload()
}}
else{
    location.reload()
}
})
}

const deleteTodo = (todo,date,time)=>{
 const dateTime = new Date(date+","+time)
 if(dateTime<new Date()){
    const data = JSON.parse(localStorage.getItem("dueTasks"))
    const newData = data.filter(ele=>!(ele.todo === todo && ele.date === date && ele.time === time))
    localStorage.setItem('dueTasks',JSON.stringify(newData))
    location.reload()
 }
 else if(dateTime.getDate()>new Date().getDate()){
    const data = JSON.parse(localStorage.getItem("upcomingTasks"))
    const newData = data.filter(ele=>!(ele.todo === todo && ele.date === date && ele.time === time))
    localStorage.setItem('upcomingTasks',JSON.stringify(newData))
    location.reload()
 }
 else{
    const data = JSON.parse(localStorage.getItem("todayTasks"))
    const newData = data.filter(ele=>!(ele.todo === todo && ele.date === date && ele.time === time))
    localStorage.setItem('todayTasks',JSON.stringify(newData))
    location.reload()
 }
}

const displayData = (todo,date,time)=>{
    const div = document.createElement('div')
    div.style.cssText = "display:flex; flex-direction:column; padding:5px;"
    const div1 = document.createElement('div')
    div1.textContent = date
    div1.style.cssText="font-weight:bold; font-size:20px"
    const div2 = document.createElement('div')
    div2.style.cssText = "display:flex; justify-content:space-between; align-items:center;"
    const div3 = document.createElement('div')
    div3.innerHTML = `${todo} at <span style="font-weight:bold;">${time}</span>`
    const div4 = document.createElement('div')
    div4.style.cssText = "display:flex; gap:10px;"
    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')
    btn1.textContent = "Edit"
    btn2.textContent = "Delete"
    btn1.style.cssText = "background-color:yellow; padding:5px; border-radius:5px;"
    btn2.style.cssText = "background-color:red; color:white; padding:5px; border-radius:5px;"
    div4.appendChild(btn1);
    div4.appendChild(btn2);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div.appendChild(div1);
    div.appendChild(div2);
    btn1.addEventListener('click',(e)=>{
        e.stopPropagation();
        editTodo(todo,date,time)
    })
    btn2.addEventListener('click',(e)=>{
        e.stopPropagation();
        deleteTodo(todo,date,time)
    })
    return div;
}

submitBtn.addEventListener('click',(e)=>{
    e.stopPropagation()
    addTodo()
})

document.addEventListener("DOMContentLoaded",(e)=>{

    const data1 = JSON?.parse(localStorage.getItem("dueTasks")) || [];
    if(data1.length>0){
     data1.forEach(ele=>{
        dueBox.appendChild(displayData(ele.todo,ele.date,ele.time))
     })  
    }
    const data2 = JSON?.parse(localStorage.getItem("todayTasks")) || [];
    if(data2.length>0){
     data2.forEach(ele=>{
        todayBox.appendChild(displayData(ele.todo,ele.date,ele.time))
     })  
    }
    const data3 = JSON?.parse(localStorage.getItem("upcomingTasks")) || [];
    if(data3.length>0){
     data3.forEach(ele=>{
        upcomingBox.appendChild(displayData(ele.todo,ele.date,ele.time))
     })  
    }
    if(dueBox.children.length==0)dueTasks.style.display = 'none';
    if(todayBox.children.length==0)todayTasks.style.display='none';
    if(upcomingBox.children.length==0)upcomingTasks.style.display='none';
})

search.addEventListener('input',(e)=>{
    e.stopPropagation();
    searchTodo();
})