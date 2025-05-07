import { useState } from "react";
import FactorData from "../components/charts/FactorData";
import FactorIntro from "../components/factors/FactorIntro";
import { useEffect } from "react";

import "../styles/Charts.css";

/**
 * The factorOptions object holds different factors that contribute to climate change. 
 * For each factor, it lists the available data types that can be selected for analysis.
 */

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
  {code:"#00bcd4", name:"Cyan"},
  {code:"#9c27b0", name:"Purple"},
  {code:"#4caf50", name:"Green"},
  {code:"#ff7043", name:"Coral"},
  {code:"#29b6f6", name:"Light Blue"},
  {code:"#206e79", name:"Teal (Dark)"}
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
      <FactorIntro />

      <section className="input-group">
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
              {query}
            </option>
          ))}
        </select>
        <select onChange={({ target }) => setColor(target.value)}>
          {factorColors.map((color) => (
            <option key={color.code} value={color.code}>
              {color.name}
            </option>
          ))}
        </select>
      </section>

      <section className="gases-chart-container">
        <div className="gas-card">
          <FactorData query={query} factor={factor} color={color} />
        </div>
      </section>
    </>
  );
}

export default Charts;
