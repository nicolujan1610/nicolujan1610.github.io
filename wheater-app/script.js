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
// Selección de parrafos
const infoCity = document.getElementById('infoCity');
const infoTemp = document.getElementById('infoTemp');
const infoMax = document.getElementById('infoMax');
const infoMin = document.getElementById('infoMin');
const infoSens = document.getElementById('infoSens');
const infoHum = document.getElementById('infoHum');

async function fetchWeather(){
    const dataJson = await getWeather();
    const temperatura = dataJson.main.temp;
    const tempMax = dataJson.main.temp_max;
    const tempMin = dataJson.main.temp_min;
    const humedad = dataJson.main.humidity;
    const sensacionTermica = dataJson.main.feels_like;
   
    console.log(dataJson)
    infoCity.innerHTML = "Ciudad: " + dataJson.name + ", " + selectedCountry.value;
    infoTemp.innerHTML = "Temperatura: " + temperatura + "°";
    infoMax.innerHTML = "Maxima: " + tempMax + "°";
    infoMin.innerHTML = "Minima: " + tempMin + "°";
    infoHum.innerHTML = "Humedad: " + humedad + "%";
    infoSens.innerHTML = "Sensación Termica: " + sensacionTermica + "°";
    // document.write("Ciudad: " + dataJson.name +"<br>");
    // document.write("Temperatura: " + temperatura +"<br>");
    // document.write("Maxima: " + tempMax +"<br>");
    // document.write("Minima: " + tempMin +"<br>");
    // document.write("Sensación Termica: " + sensacionTermica +"<br>");
    // document.write("Humedad: " + humedad +"% <br>");
}



