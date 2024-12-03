import { useEffect, useState } from 'react';
import '../css/weather.css';
import cloudsIcon from "../assests/thunder.png";
import rainIcon from "../assests/rain_with_cloud.webp";
import mistIcon from "../assests/Tornado.png";
import hazeIcon from "../assests/sun.png";
import Navbar from './Navbar';
// import Footer from './Footer';

function Weather() {
  const [city, setCity] = useState("Amravati");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "8a4d960a43d4327a1fb9e1dff652d519";
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
      console.error(`Error: ${data.message}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleOnChange = (event) => {
    setCity(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const currentDate = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return cloudsIcon;
      case "Rain":
        return rainIcon;
      case "Mist":
        return mistIcon;
      case "Haze":
        return hazeIcon;
      default:
        return hazeIcon; // Fallback image or null
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="weather-app">
      <div className="container">
        {weatherData && (
          <>
            <h1 className="container_date">{formattedDate}</h1>
            <div className="weather_data">
              <h2 className="container_city">{weatherData.name}</h2>
              <img src={getWeatherIconUrl(weatherData.weather[0].main)} alt="Waether Icon" className='container_img' width={"180px"}/>
              <h2 className="container_degree">{Math.floor(weatherData.main.temp-273)}</h2>
              <h2 className="count_par">{weatherData.weather[0].main}</h2>
              <form className="form" onSubmit={handleOnSubmit}>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter City Name"
                  onChange={handleOnChange}
                />
                <button type="submit">Get</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
    {/* <Footer/> */}
    </div>
  );
}

export default Weather;
