import { Search } from "lucide-react";
import AirQualityCard from "../cards/AirQualityCard";
import { useState } from "react";
import "../../styles/AirQualitySearch.css"

const AirQualitySearch = () => {
    const [city, setCity] = useState("");
    const handleChange = ({ target }) => {
      setCity(target.value);
    };
  
  return (
    <>
      <div className="city-input-container">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Search for air quality by city e.g. Dronten"
          className="air-quality-city"
        />
      </div>
      {city && <AirQualityCard city={city} />}
    </>
  );
};

export default AirQualitySearch;
