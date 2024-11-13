

let search = document.getElementById('searchBtn');
let cityNameInput = document.getElementById('cityName');


const APIKey = "6ac56a04d61a2262fc86c0ea638e758e";


search.addEventListener('click',()=>{

    let cityName = cityNameInput.value;
    const APICall = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+APIKey+"&units=metric";

    checkWeather();
    async function checkWeather(){
        try{
            const response = await fetch(APICall);
            if(!response.ok){
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const data = await response.json();
            changeWeatherIcon(data)
    
        }
        catch(error){
            console.log(error);
        }
        
    }
})



function changeWeatherIcon(data){
    const weatherIcon = document.getElementById('weather-icon');
    const temp = document.getElementById('temp');
    const city = document.getElementById('city');
    const humidity = document.getElementById('humidity-range');
    const windSpeed = document.getElementById('wind-speed');

    temp.textContent = data.main.temp + "°C";
    city.textContent = data.name;
    humidity.textContent = data.main.humidity + "%";
    windSpeed.textContent = data.wind.speed + " km/h";

    if(data.weather[0].main === 'Clear'){
        weatherIcon.src='./images/clear.png';
    }
    else if(data.weather[0].main === 'Clouds'){
        weatherIcon.src='./images/clouds.png';
    }
    else if(data.weather[0].main === 'Rain'){
        weatherIcon.src='./images/rain.png';
    }
    else if(data.weather[0].main === 'Snow'){
        weatherIcon.src='./images/snow.png';
    }
}

fetch("https://api.openweathermap.org/data/2.5/weather?q=kanakapura&appid=6ac56a04d61a2262fc86c0ea638e758e&units=metric")
    .then(response=>response.json())
    .then(data=> console.log(data))
    .catch((error)=> console.log(error))
