const apiKey = "3310dcd572bfb00914e02b41dd551b39";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function CheckWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "/Weather App/images/clouds.png";
    } else if (data.weather[0].main == "Clear"){
        WeatherIcon.src = "/Weather App/images/clouds.png";
    }else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "/Weather App/images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "/Weather App/images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        WeatherIcon.src = "/Weather App/images/mist.png";
    }
    }  
    
}
searchBtn.addEventListener("click", () => {
    CheckWeather(searchBox.value); 
});