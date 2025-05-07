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
          <Factory size={24} color="var(--primary-color)" /> Greenhouse Gas
          Trends & Temperature Anomalies
        </h1>

        <p>
          <LineChart
            size={18}
            color="var(--primary-color)"
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          This page helps you to see the trend of atmospheric greenhouse gases (
          <span className="co2-color"> CO₂</span>,{" "}
          <span className="ch4-color">CH₄</span>,{" "}
          <span className="n2o-color">N₂O</span>, and{" "}
          <span className="sf6-color">SF₆</span>) using long-term data from NOAA
          and NASA. You can explore both global and location-based records,
          covering decades of climate trends.
        </p>

        <p>
          <CalendarRange
            color="var(--primary-color)"
            size={18}
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          Choose between monthly, annual, or increase rate views for each gas.
          The data is presented with clear line charts that highlight seasonal
          patterns and long-term shifts.
        </p>

        <p>
          <Globe
            size={18}
            color="var(--primary-color)"
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          Track the growth of key greenhouse gases over time. Charts display
          Mauna Loa Observatory data and global averages, helping users
          understand the scale of emissions.
        </p>

        <p>
          <Thermometer
            size={18}
            color="var(--primary-color)"
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          Global temperature anomalies show how much Earth's temperature has
          deviated from historical norms. The dashboard displays daily, monthly,
          and annual trends, including the current +1.2°C rise since 1880.
        </p>

        <p>
          <LineChart
            size={18}
            color="var(--primary-color)"
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          Data visualizations include both land and ocean temperatures. Despite
          short-term fluctuations, the long-term trend clearly indicates ongoing
          global warming, with 2023 recorded as the hottest year to date.
        </p>
      </article>
    </section>
  );
};
export default FactorIntro;
