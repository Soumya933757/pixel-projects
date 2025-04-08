const  container = document.querySelector('.container')
const mainBox = document.querySelector('.main-box')
const passBox = document.querySelector('.pass-box')
const resultBox = document.querySelector('.result-box')
const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.slider-value')
const selectBox = document.querySelector('.select-box')
const letters  = document.querySelector('#letters')
const numbers = document.querySelector('#numbers')
const mixed = document.querySelector('#mixed')
const punctuation = document.querySelector('#punctuation')
const  button = document.querySelector('button')

const letterArray = 'abcdefghijklmnopqrstuvwxyz';
const numberArray = '0123456789';
const mixedArray = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const punctuationArray = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

slider.addEventListener('input',()=>{
    sliderValue.textContent = slider.value;
    if(!letters.checked && !numbers.checked && !punctuation.checked && !mixed.checked){
        selectBox.textContent = "Please select at least one checkbox to generate a password." 
selectBox.style.cssText ="background-color:red; padding:10px; color:white;"
    }
    else{
        generatePassword();
    }

})

const generatePassword = ()=>{
    let password = '';
    let arr="";
    if(letters.checked)arr+=letterArray;
    if(numbers.checked)arr+=numberArray;
    if(punctuation.checked)arr+=punctuationArray;
    if(mixed.checked)arr+=mixedArray;
    for(let i=0;i<slider.value;i++){
        password+=arr[Math.floor(Math.random()*arr.length)];
    }
    resultBox.textContent=password;
}

button.addEventListener('click',()=>{
    navigator.clipboard.writeText(resultBox.textContent)
    selectBox.textContent="Password copied to clipboard"
     selectBox.style.cssText ="background-color:green; padding:10px; color:white;"
})

