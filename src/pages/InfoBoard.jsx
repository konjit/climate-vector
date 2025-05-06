import { useState } from "react";
import Intro from "../components/templates/Intro";
import FactorGrowthCard from "../components/cards/FactorGrowthCard";
import CO2InfoCard from "../components/factors/CO2InfoCard";
import { BarChart } from "lucide-react";

import "../styles/InfoBoard.css";

const InfoBoard = () => {
  const [showAll, setShowAll] = useState(false);

  const sections = [
    <div key="info-section-1" className="info-section">
      <h3 className="section-title">Greenhouse Gases growth rate indicators</h3>
      <div className="info-card-container">
        <CO2InfoCard key="co2" gasName="co2" startYear="2014" endYear="2024" />
        <FactorGrowthCard
          key="co2-increase_ml"
          factor="co2"
          query="increase_ml"
        />
        <FactorGrowthCard key="ch4-growth" factor="ch4" query="growth" />
        <FactorGrowthCard key="n2o-growth" factor="n2o" query="growth" />
        {/* <FactorGrowthCard factor="sf6" query="growth" /> */}
      </div>
    </div>,

    <div key="info-section-2" className="info-section">
      <h3 className="section-title">Temperature anomaly indicators</h3>
      <div className="info-card-container">
        <FactorGrowthCard
          key="annual_anomaly_avg"
          factor="temp"
          query="annual_anomaly_avg"
        />
        <FactorGrowthCard key="daily_avg" factor="temp" query="daily_avg" />
        <FactorGrowthCard key="daily_max" factor="temp" query="daily_max" />
        <FactorGrowthCard
          key="monthly_anomaly_loc"
          factor="temp"
          query="monthly_anomaly_loc"
        />
      </div>
    </div>,

    <div key="info-section-3" className="info-section">
      <h3 className="section-title">Ice & Oceans mass loss indicators</h3>
      <div className="info-card-container">
        <FactorGrowthCard key="ocean" factor="ocean" query="mass" />
        <FactorGrowthCard
          key="antarctica"
          factor="glaciers"
          query="antarctica"
        />
        <FactorGrowthCard
          key="glaciers-greenland"
          factor="glaciers"
          query="greenland"
        />
        <FactorGrowthCard key="glaciers" factor="glaciers" query="greenland" />
      </div>
    </div>,
  ];

  const visibleSection = showAll ? sections : sections.slice(0, 2);

  return (
    <>
      <Intro />

      <div className="paragraph">
        <BarChart color="var(--text-color)" size={44} />
        <p className="headline-para">
          This infoboard provides general information about greenhouse gases
          <span className="co2-color"> CO₂</span>,{" "}
          <span className="ch4-color">CH₄</span>,{" "}
          <span className="n2o-color">N₂O</span>, and{" "}
          <span className="sf6-color">SF₆</span> and their concentrations. It
          also highlights key indicators like temperature anomalies and
          <span className="ice-color"> ice mass loss</span> caused by global
          warming.
        </p>
      </div>
      <section className="factors-container"> {visibleSection}</section>
      <button
        className="btn btn-show"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {!showAll ? "Show More" : "Show Less"}
      </button>
    </>
  );
};

export default InfoBoard;
