const apiKey = 'YOUR_API_KEY';

function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetch(https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => console.error('Error fetching weather data:', error));
    } else {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            fetch(https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric)
                .then(response => response.json())
                .then(data => displayWeather(data))
                .catch(error => console.error('Error fetching weather data:', error));
        });
    }
}

function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}