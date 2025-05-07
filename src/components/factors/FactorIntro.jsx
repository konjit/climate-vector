import {
  Factory,
  Globe,
  CalendarRange,
  LineChart,
  Thermometer,
} from "lucide-react";

import "../../styles/Charts.css";

const FactorIntro = () => {
  return (
    <section className="chart-intro">
      <article>
        <h1>
          <Factory size={24} color="var(--primary-color)" /> Climate &
          Atmospheric Trends
        </h1>

        <p>
          <LineChart
            size={18}
            color="var(--primary-color)"
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          Explore long-term trends in greenhouse gases (
          <span className="co2-color">CO₂</span>,{" "}
          <span className="ch4-color">CH₄</span>,{" "}
          <span className="n2o-color">N₂O</span>,{" "}
          <span className="sf6-color">SF₆</span>), temperature, sea level, and
          ice loss using data from NOAA and other global sources.
        </p>

        <p>
          <CalendarRange
            color="var(--primary-color)"
            size={18}
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          View data by month, year, or growth rate across different regions and
          indicators.
        </p>

        <p>
          <Globe
            size={18}
            color="var(--primary-color)"
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          Track emissions and environmental changes globally, including Mauna
          Loa and worldwide averages.
        </p>

        <p>
          <Thermometer
            size={18}
            color="var(--primary-color)"
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          Monitor temperature anomalies and trends, including daily, monthly,
          and annual global averages.
        </p>

        <p>
          <LineChart
            size={18}
            color="var(--primary-color)"
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          Visualizations also show ocean temperature, sea level rise, and ice
          mass loss in Antarctica and Greenland.
        </p>
      </article>
    </section>
  );
};
export default FactorIntro;
