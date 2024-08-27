const apiKey = "02b14741bf0fc7be5c4579d8d760f149";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
        document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;

        const weatherCondition = data.weather[0].main;

        
        switch (weatherCondition) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            default:
                weatherIcon.src = "images/default.png"; 
                break;
        }

        
        changeBackground(weatherCondition);

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } catch (error) {
        console.error(error.message); 
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

function changeBackground(weather) {
    const body = document.body;

    console.log('Changing background to:', weather); 

    switch (weather) {
        case 'Clear':
            body.style.backgroundImage = 'url("photos/clearbg.jpg")';
            break;
        case 'Clouds':
            body.style.backgroundImage = 'url("photos/cloudsbg.jpg")';
            break;
        case 'Rain':
            body.style.backgroundImage = 'url("photos/rainbg.jpg")';
            break;
        case 'Snow':
            body.style.backgroundImage = 'url("photos/snowbg.jpg")';
            break;
        default:
            body.style.backgroundImage = 'url("photos/clearbg.jpg")';
            break;
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name");
    }
});