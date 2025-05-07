import { Atom, Wind, SprayCan } from "lucide-react";
import { Tooltip } from "react-tooltip";

import "../../styles/AirQualityCard.css";

const AirQualityCard = ({ city, data }) => {
  const components = data.list[0].components;
  const aqi = data.list[0].main.aqi;

  return (
    <div className="card-air">
      <div className="card-air-header">
        <h3 className="city-header">
          {city[0].name}'s, in {city[0].country}{" "}
        </h3>
      </div>

      <div className="card-air-body">
        <div className={`pollutant ${aqi < 2 ? "aqi-good" : "aqi-not-good"}`}>
          <Wind size={18} color="var(--primary-color)" />
          <span data-tooltip-id="aqi">AQI: {aqi} </span>
          <Tooltip id="aqi" place="top" effect="solid">
            Air Quality Index (1 = Good, 5 = Very Poor)
          </Tooltip>
        </div>
        <div className="pollutant">
          <Atom size={18} color="var(--primary-color)" />
          <span data-tooltip-id="co">CO: {components.co} μg/m³</span>
          <Tooltip id="co" place="top" effect="solid">
            Carbon Monoxide
          </Tooltip>
        </div>
        <div className="pollutant">
          <Atom size={18} color="var(--primary-color)" />
          <span data-tooltip-id="no2">NO₂: {components.no2} μg/m³</span>
          <Tooltip id="no2" place="top" effect="solid">
            Nitric Oxide
          </Tooltip>
        </div>
        <div className="pollutant">
          <Atom size={18} color="var(--primary-color)" />
          <span data-tooltip-id="o3">O₃: {components.o3} μg/m³</span>
          <Tooltip id="o3" place="top" effect="solid">
            Ozone
          </Tooltip>
        </div>
        <div className="pollutant">
          <SprayCan size={18} color="var(--primary-color)" />
          <span data-tooltip-id="pm2.5">PM2.5: {components.pm2_5} μg/m³</span>
          <Tooltip id="o3" place="top" effect="solid">
            Fine particles ≤ 2.5μm in μg/m³
          </Tooltip>
        </div>
        <div className="pollutant">
          <SprayCan size={18} color="var(--primary-color)" />
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
