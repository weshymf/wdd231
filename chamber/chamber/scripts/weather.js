// Open-Meteo API for weather data (no API key needed)
const weatherApiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=13.0026&longitude=-88.2925&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America/El_Salvador';

// Fetch weather data from Open-Meteo API
async function getWeatherData() {
    try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();

        // Current weather data
        const currentTemp = Math.round(data.current_weather.temperature); // Rounded to nearest integer
        const description = data.current_weather.weathercode; // Weather description code from Open-Meteo

        // Display the weather
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <p>Current Temperature: ${currentTemp}°F</p>
            <p>Description: ${description}</p>
            <h3>3-Day Forecast:</h3>
            <ul>
                <li>${new Date(data.daily.time[0]).toLocaleDateString()}: Max ${data.daily.temperature_2m_max[0]}°F, Min ${data.daily.temperature_2m_min[0]}°F</li>
                <li>${new Date(data.daily.time[1]).toLocaleDateString()}: Max ${data.daily.temperature_2m_max[1]}°F, Min ${data.daily.temperature_2m_min[1]}°F</li>
                <li>${new Date(data.daily.time[2]).toLocaleDateString()}: Max ${data.daily.temperature_2m_max[2]}°F, Min ${data.daily.temperature_2m_min[2]}°F</li>
            </ul>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeatherData();
