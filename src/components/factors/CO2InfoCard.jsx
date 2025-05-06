import useData from "../../hooks/useData";
import AnimateValue from "../../utils/AnimateValue";
import Loading from "../templates/Loading";
import { TrendingUp, TrendingDown, Calendar, Gauge } from "lucide-react";
import { ROOT_END_POINT } from "../../config";
import "../../styles/Charts.css"

const CO2InfoCard = ({ gasName, startYear="2024", endYear="2011" }) => {
  const currentUrl = "https://climatemonitor.info/api/public/v1/co2/latest"; 
  const oldUrl = `${ROOT_END_POINT}/${gasName}/for/${startYear}`;
  console.log(currentUrl);
  const {
    current: {
      data: currentData,
      error: currentError,
      loading: currentLoading,
    },
    old: { data: oldData, error: oldError, loading: oldLoading },
  } = useData(currentUrl, oldUrl);

  const errorMsg = currentError || oldError;

  if (currentError || oldError)
    return <div className="error-message">{errorMsg}</div>;
  if (currentLoading || oldLoading) return <Loading />;

  const currentValue = currentData?.data?.value ?? 0;
  const oldValue = oldData?.data?.value ?? 0;
  const difference = currentValue - oldValue;
  
  const percentageChange = oldValue !== 0 ? (difference / oldValue) * 100 : 0;

  return (
    <div className="info-card">
      <div className="card-header">
        <Gauge size={32} color="var(--primary-color)" />
        <h2 className="details">{gasName.toUpperCase()} Stats</h2>
      </div>

      <div className="card-body">
        <div className="trend">
          {difference > 0 ? (
            <TrendingUp size={25} color="var(--co2-accent)" />
          ) : (
            <TrendingDown size={25} color="var(--co2-accent)" />
          )}
          <span className="details">
            by {Math.abs(percentageChange).toFixed(2)}% over {endYear - startYear} years
          </span>
        </div>

        <p>
          <span className="current-value">
            <AnimateValue value={currentValue} />
          </span>
          <strong className="details"> Unit [ppm] </strong>
        </p>

        <div className="value-row">
          <Calendar size={30} color="var(--primary-color)" className="icon" />
          <p className="details">
            {" "}
            {endYear - startYear} years ago was: {oldValue} ppm
          </p>
        </div>
      </div>
    </div>
  );
};

export default CO2InfoCard;
