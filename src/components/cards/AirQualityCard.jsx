import { Droplets, Wind, Cloud, Sun, Thermometer, Circle } from "lucide-react";
import { Tooltip } from "react-tooltip";
import useFetch from "../../hooks/useFetch";
import Loading from "../templates/Loading";
import "../../styles/AirQualityCard.css";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

const AirQualityCard = ({ city }) => {
  const [endPoint, setEndPoint] = useState(null);
  const {
    data: cityData,
    error: cityError,
    loading: cityLoading,
  } = useFetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
      city
    )}&limit=1&appid=${API_KEY}`
  );

  useEffect(() => {
    if (cityData?.[0]?.lat && cityData?.[0]?.lon) {
      const newEndPoint = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${cityData[0].lat}&lon=${cityData[0].lon}&appid=${API_KEY}`;
      setEndPoint(newEndPoint);
    }
  }, [cityData]);

  const { data: airData, loading, error } = useFetch(endPoint);

  if (cityLoading || loading)
    return (
      <div className="card-air">
        {" "}
        <Loading />
      </div>
    );
  if (cityError || error) return <div>Error fetching data.</div>;

  const components = airData.list[0].components;
  const aqi = airData.list[0].main.aqi;

  return (
    <div className="card-air">
      <div className="card-air-header">
        <h3 className="city-header">{city}'s Air Quality Details</h3>
      </div>

      <div className="card-air-body">
        <div className="pollutant">
          <Droplets size={18} color="var(--primary-color)" />
          <span data-tooltip-id="aqi">AQI: {aqi} </span>
          <Tooltip id="aqi" place="top" effect="solid">
            Air Quality Index (1 = Good, 5 = Very Poor)
          </Tooltip>
        </div>
        <div className="pollutant">
          <Droplets size={18} color="var(--primary-color)" />
          <span data-tooltip-id="co">CO: {components.co} μg/m³</span>
          <Tooltip id="co" place="top" effect="solid">
            Carbon Monoxide
          </Tooltip>
        </div>
        <div className="pollutant">
          <Wind size={18} color="var(--primary-color)" />
          <span data-tooltip-id="no2">NO₂: {components.no2} μg/m³</span>
          <Tooltip id="no2" place="top" effect="solid">
            Nitric Oxide
          </Tooltip>
        </div>
        <div className="pollutant">
          <Cloud size={18} color="var(--primary-color)" />
          <span data-tooltip-id="o3">O₃: {components.o3} μg/m³</span>
          <Tooltip id="o3" place="top" effect="solid">
            Ozone
          </Tooltip>
        </div>
        <div className="pollutant">
          <Sun size={18} color="var(--primary-color)" />
          <span data-tooltip-id="pm2.5">PM2.5: {components.pm2_5} μg/m³</span>
          <Tooltip id="o3" place="top" effect="solid">
            Fine particles ≤ 2.5μm in μg/m³
          </Tooltip>
        </div>
        <div className="pollutant">
          <Thermometer size={18} color="var(--primary-color)" />
          <span data-tooltip-id="pm2.5">PM10: {components.pm10} μg/m³</span>
          <Tooltip id="o3" place="top" effect="solid">
            Inhalable particles ≤ 10μm in μg/m³
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;
