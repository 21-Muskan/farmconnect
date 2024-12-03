import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faSeedling, faGlobe, faWater, faChartLine } from "@fortawesome/free-solid-svg-icons";
import "../css/dashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Navbar from "./Navbar";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Dashboard = () => {
  const [weather, setWeather] = useState({
    temperature: "Loading...",
    condition: "Loading...",
    wind: "Loading...",
    humidity: "Loading...",
    icon: faCloudSun, // Default icon
  });

  useEffect(() => {
    // Mock weather data setup
    setTimeout(() => {
      setWeather({
        temperature: "28°C",
        condition: "Sunny",
        wind: "12 km/h",
        humidity: "65%",
        icon: faCloudSun, // You can customize this dynamically based on conditions
      });
    }, 1000);
  }, []);

  const cropData = {
    labels: ["Wheat", "Rice", "Corn", "Barley", "Soybean"],
    datasets: [
      {
        label: "Crop Yield (tons)",
        data: [30, 45, 25, 15, 20],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const marketData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Crop Prices (USD)",
        data: [120, 130, 125, 140, 135],
        borderColor: "rgba(255, 99, 132, 0.8)",
        fill: false,
      },
    ],
  };

  return (
    
    <div className="landing-page">
       <Navbar/>
       
    <div className="dashboard">
     
      {/* Weather Section */}
      <section id="weather" className="card weather-card">
        <h2>
          <FontAwesomeIcon icon={weather.icon} /> Weather Updates
        </h2>
        <div className="weather-details">
          <p><strong>Temperature:</strong> {weather.temperature}</p>
          <p><strong>Condition:</strong> {weather.condition}</p>
          <p><strong>Wind:</strong> {weather.wind}</p>
          <p><strong>Humidity:</strong> {weather.humidity}</p>
        </div>
      </section>

      {/* Crop Monitoring Section */}
      <section id="crop-monitoring" className="card">
        <h2>
          <FontAwesomeIcon icon={faSeedling} /> Crop Monitoring
        </h2>
        <Bar data={cropData} options={{ responsive: true, maintainAspectRatio: false }} />
      </section>

      {/* Soil Health Section */}
      <section id="soil-health" className="card">
        <h2>
          <FontAwesomeIcon icon={faGlobe} /> Soil Health
        </h2>
        <p><strong>Moisture Level:</strong> Adequate</p>
        <p><strong>Nutrients:</strong> Nitrogen, Phosphorus, Potassium</p>
      </section>

      {/* Irrigation Section */}
      <section id="irrigation" className="card">
        <h2>
          <FontAwesomeIcon icon={faWater} /> Irrigation Management
        </h2>
        <p><strong>Schedule:</strong> Morning, 6 AM - 9 AM</p>
        <p><strong>Efficiency:</strong> 90%</p>
      </section>

      {/* Market Analysis Section */}
      <section id="market" className="card">
        <h2>
          <FontAwesomeIcon icon={faChartLine} /> Market Analysis
        </h2>
        <Line data={marketData} options={{ responsive: true, maintainAspectRatio: false }} />
      </section>
    </div>
    </div>
  );
};

export default Dashboard;
