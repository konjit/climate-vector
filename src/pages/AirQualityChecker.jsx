import Loading from "../components/templates/Loading";
import useFetch from "../hooks/useFetch";

// To be implemented 
const getLocation = () => {
  const endPoint = "http://ip-api.com/json/";
  const { data: location, error, loading } = useFetch(endPoint);

  return location;
};

const AirQualityChecker = () => {
  const location = getLocation();
  console.log(location.lat);
  let endPoint = "";
  if (location) {
    endPoint = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}`
  }

  const { data, error, loading } = useFetch(endPoint);
  console.log(data.list);

  if (loading) return <Loading />;
  return <></>;
};

export default AirQualityChecker;
