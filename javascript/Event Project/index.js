const eventName=document.querySelector('#event')
const eventDate=document.querySelector('#date')
const eventStartTime=document.querySelector('#start-time')
const eventEndTime=document.querySelector('#end-time')
const eventDesc=document.querySelector('#description')
const eventLocation=document.querySelector('#location')
const submitButton=document.querySelector('button')
const container = document.querySelector('.container')
const dialog = document.querySelector('.dialog')
const card=document.querySelector('.card')
const eventBox=document.querySelector('.event-box')
const clickHandler=()=>{
if(!eventName.value || !eventDate.value || !eventStartTime.value || !eventEndTime.value || !eventDesc.value || !eventLocation.value ){
    dialog.style.cssText = "visibility: visible;";
}
else { card.style.cssText = "visibility: visible;";
    eventBox.style.cssText = "visibility: hidden;"
    const inviteBox=document.createElement('div')
    inviteBox.style.cssText="display:flex; flex-direction: column; gap:10px;"
    const heading=document.createElement('div')
    heading.textContent='YOU ARE INVITED'
    heading.style.cssText="color:#e74c3c; font-size:32px;font-weight:bold;text-align:center"
    inviteBox.appendChild(heading)
    const subHeading=document.createElement('div')
    subHeading.textContent='TO JOIN THE'
    subHeading.style.cssText="font:italic; font-size:28px;font-weight:bold;text-align:center"
    inviteBox.appendChild(subHeading)
    const eventHeading=document.createElement('div')
    eventHeading.textContent=eventName.value.toUpperCase()
    eventHeading.style.cssText="font-size:30px;font-weight:bolder;text-align:center"
    inviteBox.appendChild(eventHeading)
    const dateHeading=document.createElement('div')
    dateHeading.textContent=new Date(eventDate.value).toDateString()
    dateHeading.style.cssText="font-size:22px;"
    inviteBox.appendChild(dateHeading)
    const timeHeading=document.createElement('div')
    timeHeading.textContent=`${eventStartTime.value}-${eventEndTime.value}`
    timeHeading.style.cssText="font-size:22px;"
    inviteBox.appendChild(timeHeading)
    const locationHeading=document.createElement('div')
    locationHeading.textContent=eventLocation.value
    locationHeading.style.cssText="font-size:22px;"
    inviteBox.appendChild(locationHeading)
    const descBody=document.createElement('div')
    descBody.textContent=eventDesc.value
    descBody.style.cssText="font-size:18px; overflow-wrap: break-word";
    inviteBox.appendChild(descBody)
    card.appendChild(inviteBox)}
}

submitButton.addEventListener('click',(e)=>{
    e.stopPropagation()
    clickHandler()});

container.addEventListener('click',(e)=>{
    if(dialog.style.visibility == "visible" && !dialog.contains(e.target)) dialog.style.cssText = "visibility: hidden;";
    if(card.style.visibility == "visible" && !card.contains(e.target)){
        eventBox.style.cssText = "visibility: visible;"
        card.style.cssText = "visibility: hidden;"
        card.innerHTML="";
    }
    })