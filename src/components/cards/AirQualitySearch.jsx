import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import AirQualityCard from "../cards/AirQualityCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../templates/Loading";

import "../../styles/AirQualitySearch.css";

import { OWM_AIR_POLLUTION, OWM_GEO_LOCATION } from "../../config";

const API_KEY = import.meta.env.VITE_API_KEY;

const AirQualitySearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchCity, setSearchCity] = useState("");

  // Fetches city details like latitude(lat) and longtiude(lon)
  const { data: cityData, error: cityError, loading: cityLoading } = useFetch(
    searchCity.length > 2
      ? `${OWM_GEO_LOCATION}/direct?q=${encodeURIComponent(
          searchCity
        )}&limit=1&appid=${API_KEY}`
      : null
  );

  // Fetches air quality data based on the city's lat and lon
  const { data: airData, error: airError, loading: airLoading} = useFetch(
    cityData?.[0]?.lat
      ? `${OWM_AIR_POLLUTION}/air_pollution?lat=${cityData[0].lat}&lon=${cityData[0].lon}&appid=${API_KEY}`
      : null
  );

  // This is to delay the api fetch till the user stops typing that means delays the update of the searchCity
  // in order avoid fetching data for every key stroke 
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchCity(inputValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <>
      <div className="city-input-container">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for air quality by city e.g. Dronten"
          className="air-quality-city"
        />
      </div>

      {cityLoading && searchCity.length > 2 || airLoading && cityData?.[0]?.lat ? (
        <div className="card-air">
          <Loading />
        </div>
      ) : cityError || airError ? (
        <div className="card-air"><div className="error-container">{error}</div></div>
      ) : inputValue.length > 0 && cityData.length > 0 && airData?.list?.[0] ?  (
        <AirQualityCard city={cityData} data={airData} />
      ) :
        null // do not want to return any jsx
      }
    </>
  );
};

export default AirQualitySearch;
