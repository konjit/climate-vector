import { TrendingUp, TrendingDown, Calendar, Gauge } from "lucide-react";
import useFetch from "../hooks/useFetch";
import Loading from "./templates/Loading";
import { ROOT_END_POINT } from "../config";
import "../styles/GrowthCard.css";

const FactorGrowthCard = ({ factor, query }) => {
  const endPoint = `${ROOT_END_POINT}/${factor}/${query}`;

  const { data: factorData, error, loading } = useFetch(endPoint);

  if (loading) return <Loading />;
  if (error || !factorData)
    return (
      <div className="info-card">
        <div className="error-container">{error}</div>
      </div>
    );

  const {
    data: { readings, title, unit },
  } = factorData;

  const latest = readings.at(-1);
  const old = readings.at(0);

  const growth = latest?.value;
  const year = latest?.label;
  const fromYear = old?.label;

  return (
    <div className="info-card">
      <div className="card-header">
        <Gauge size={44} color={`var(--${factor}-accent)`} />
        <h2 style={{ color: `var(--${factor}-accent)` }}>
          {factor.toUpperCase()} {title}
        </h2>
      </div>

      <div className="card-body">
        <div className="trend" color={`var(--${factor}-accent)`}>
          {growth > 0 ? (
            <TrendingUp size={25} color={`var(--${factor}-accent)`} />
          ) : (
            <TrendingDown size={25} color={`var(--${factor}-accent)`} />
          )}
          <p>
            <span
              className="current-value"
              style={{ color: `var(--${factor}-accent)` }}
            >
              {growth > 0 ? "+" : ""}
              {growth}{" "}
            </span>
            <strong className="details">Unit: [{unit}]</strong>
          </p>
        </div>

        <div className="value-row" color={`var(--${factor}-accent)`}>
          <Calendar
            size={30}
            color={`var(--${factor}-accent)`}
            className="icon"
          />
            <p className="details">
            {fromYear} to {year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FactorGrowthCard;
