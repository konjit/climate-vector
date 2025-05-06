import {
  Factory,
  Globe,
  CalendarRange,
  LineChart,
  Thermometer,
  Calendar,
} from "lucide-react";
import "../../styles/Charts.css";

const FactorIntro = () => {
  return (
    <section className="chart-intro">
      <article>
        <h1>
          <Factory size={24} /> Greenhouse Gas Trends & Global Temperature
          Anomalies
        </h1>

        <p>
          <LineChart
            size={18}
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          This dashboard visualizes atmospheric greenhouse gases (CO₂, CH₄, N₂O,
          SF₆) using long-term data from NOAA and NASA. You can explore both
          global and location-based records, covering decades of climate trends.
        </p>

        <p>
          <CalendarRange
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
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          Track the growth of key greenhouse gases over time. Charts display
          Mauna Loa Observatory data and global averages, helping users
          understand the scale of emissions.
        </p>

        <div className="paragraph">
          <Thermometer
            size={18}
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          <p>
            Global temperature anomalies show how much Earth's temperature has
            deviated from historical norms. The dashboard displays daily,
            monthly, and annual trends, including the current +1.2°C rise since
            1880.
          </p>
        </div>

        <div className="paragraph">
          <Calendar
            size={18}
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          />
          <p>
            Data visualizations include both land and ocean temperatures.
            Despite short-term fluctuations, the long-term trend clearly
            indicates ongoing global warming, with 2023 recorded as the hottest
            year to date.
          </p>
        </div>
      </article>
    </section>
  );
};
export default FactorIntro;
