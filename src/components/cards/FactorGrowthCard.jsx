import { TrendingUp, TrendingDown, Calendar, Gauge } from "lucide-react";
import { useState } from "react";

import useFetch from "../../hooks/useFetch";
import Loading from "../templates/Loading";
import { ROOT_END_POINT } from "../../config";

import "../../styles/FactorGrowthCard.css";

/**
 * This array provides detailed information for each climate factor (e.g., CO2, temperature, ocean levels). 
 * It is used to display data when a show/hide button is clicked, by matching the "id" in this array with the 
 * ` factor prop of the FactorGrowthCard component.
 */

const factorInfo = [
  {
    id: "co2",
    title: "CO₂ (Carbon Dioxide)",
    info: "Mainly caused by fossil fuel combustion, deforestation, and industrial processes.",
    contribution: "76%",
  },
  {
    id: "ch4",
    title: "CH₄ (Methane)",
    info: "Released from livestock, landfills, and natural gas production.",
    contribution: "16%",
  },
  {
    id: "n2o",
    title: "N₂O (Nitrous Oxide)",
    info: "Emitted from agricultural activities and industrial processes.",
    contribution: "6%",
  },
  {
    id: "sf6",
    title: "SF₆ (Sulfur Hexafluoride)",
    info: "A potent greenhouse gas used in electrical insulation and electronics.",
    contribution: "<1%",
  },
  {
    id: "temp",
    info: "Temperature Anomalies",
    contribution:
      "Indicate long-term global warming trends due to greenhouse gas emissions.",
  },
  {
    id: "ocean",
    info: "Oceans absorb a large amount of carbon dioxide and heat from the atmosphere.",
    contribution:
      "The ocean has absorbed about 90% of the excess heat from global warming.",
  },
  {
    id: "glaciers",
    info: "Glaciers and ice sheets are melting due to rising global temperatures.",
    contribution:
      "The melting of glaciers is contributing to rising sea levels.",
  },
];

const FactorGrowthCard = ({ factor, query }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const endPoint = `${ROOT_END_POINT}/${factor}/${query}`;
  const { data: factorData, error, loading } = useFetch(endPoint);

  if (loading) return <Loading />;
  if (error || !factorData?.data) {
    return (
      <div className="info-card">
        <div className="error-container">{error || "No data available"}</div>
      </div>
    );
  }

  const {
    data: { readings, title, unit },
  } = factorData;

  const latest = readings.at(-1);
  const old = readings.at(0);

  const growth = latest?.value;
  const year = latest?.label;
  const fromYear = old?.label;

  const factorDetails = factorInfo.find((f) => f.id === factor);

  return (
    <div className={`info-card ${isExpanded ? "card-selected" : ""}`}>
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

        {isExpanded && factorDetails && (
          <div className="expanded-info">
            <p>{factorDetails.info}</p>
            {factorDetails.contribution && (
              <p>
                Contribution to climate change:
                <span style={{ color: `var(--${factor}-accent)` }}>
                  {" "}
                  {factorDetails.contribution}{" "}
                </span>
              </p>
            )}
          </div>
        )}
        <button
          className={`show-more-less-btn ${
            isExpanded ? "show-more-less-active" : ""
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide Info" : "Show Info"}
        </button>
      </div>
    </div>
  );
};

export default FactorGrowthCard;
