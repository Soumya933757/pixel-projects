const container = document.querySelector('.container')
const convertBox = document.querySelector('.convert-box')
const currencyBox = document.querySelector('.currency-box')
const resultBox = document.querySelector('.result-box')
const type1 = document.querySelector('#type-1')
const type2 = document.querySelector('#type-2')
const button = document.querySelector('button')
const input = document.querySelector('input')


const countryApi ="https://restcountries.com/v3.1/all?fields=name,currencies,flag" 
const yourApiKey = "1e699cff2942361d005edb99"
let fromCurrency,toCurrency;
const currencyApi = `https://v6.exchangerate-api.com/v6/${yourApiKey}/pair/`

const fetchCountries = async()=>{
    try{
        const response = await fetch(countryApi);
        const data = await response.json();
        const fragment = new DocumentFragment();
        data.forEach(country=>{
            const option = document.createElement('option');
            option.value = `${Object.keys(country?.currencies)[0]}`
            option.textContent = `${Object.keys(country?.currencies)[0]}-${country?.currencies[Object.keys(country.currencies)[0]]?.name} `;
            fragment.append(option);
        })
        
        type1.appendChild(fragment.cloneNode(true));
        type2.appendChild(fragment);
        fromCurrency=type1.value;
        toCurrency=type2.value;
        console.log(toCurrency,fromCurrency)
    }catch(error){
        console.error(error);
    }
}

const convertCurrency = async()=>{
    try{
        const response = await fetch(currencyApi+`${fromCurrency}/${toCurrency}`);
        const data = await response.json();
        const convertedAmount = data?.conversion_rate * Number(input.value);
        resultBox.textContent = `The converted amount is ${convertedAmount.toFixed(2)} ${toCurrency}`;
        console.log(data)
    }catch(error){
        console.error(error);
        resultBox.textContent = "An error occurred while fetching the data.";
    }
}


document.addEventListener('DOMContentLoaded',()=>{
    fetchCountries();
})

button.addEventListener('click',(e)=>{
e.stopPropagation()
convertCurrency();
})

type1.onchange = () => {
    fromCurrency = type1.value;
  };
  
  type2.onchange = () => {
    toCurrency = type2.value;
  };
  






