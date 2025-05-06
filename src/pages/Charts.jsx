import { useState } from "react";
import FactorData from "../components/charts/FactorData";
import GasIntro from "../components/factors/FactorIntro";
import { useEffect } from "react";

import "../styles/Charts.css";

const factorOptions = {
  co2: [
    "monthly_ml",
    "monthly_gl",
    "annual_gl",
    "annual_ml",
    "increase_gl",
    "increase_ml",
  ],
  ch4: ["monthly", "annual", "growth"],
  sf6: ["monthly", "annual", "growth"],
  n2o: ["monthly", "annual", "growth"],
  ocean: ["mass", "level"],
  glaciers: ["antarctica", "greenland"],
  temp: ["annual_anomaly_avg", "monthly_anomaly_avg", "daily_avg"],
};

const factorColors = [
  "#00bcd4",
  "#9c27b0",
  "#4caf50",
  "#ff7043",
  "#29b6f6",
  "#206e79",
];

function Charts() {
  const [factor, setFactor] = useState("co2");
  const [query, setQuery] = useState("monthly_ml");
  const [color, setColor] = useState("#206e79");
  
  useEffect(() => {
    setQuery(factorOptions[factor][0]);
  }, [factor]);
  
  return (
    <>
      <GasIntro />

      <div className="input-group">
        <select onChange={({ target }) => setFactor(target.value)}>
          {Object.keys(factorOptions).map((factor) => (
            <option key={factor} value={factor}>
              {factor.toUpperCase()}
            </option>
          ))}
        </select>
        <select onChange={({ target }) => setQuery(target.value)}>
          {factorOptions[factor]?.map((query) => (
            <option key={query} value={query}>
              {query.toUpperCase()}
            </option>
          ))}
        </select>
        <select onChange={({ target }) => setColor(target.value)}>
          {factorColors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div className="gases-chart-container">
        <div className="gas-card">
          <FactorData query={query} factor={factor} color={color} />
        </div>
      </div>
    </>
  );
}

export default Charts;
