const btnEnviarCiudad = document.getElementById("btnEnviarCiudad");
const selectedCountry = document.getElementById("countrySelected");
const citySelected = document.getElementById("citySelected");
const API_KEY = 'f531ba5c69faedd0339cb5632b6f0da7';

btnEnviarCiudad.addEventListener('click',(e)=>{
    e.preventDefault();
    fetchWeather();
    console.log(selectedCountry.value);
});

async function getWeather(){
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${citySelected.value},${selectedCountry.value}&appid=${API_KEY}&units=metric&lang=es`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
}

async function fetchWeather(){
    const dataJson = await getWeather();
    console.log(dataJson);
}

