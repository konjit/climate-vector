import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const CustomAreaChart = ({ data: factorData, color, dataKey = "value" }) => {
  const {
    data: { readings, title, description, unit, lastUpdate },
  } = factorData;

  if (!readings || readings.length === 0) {
    return (
      <div className="chart-no-data">
        <div className="no-data-text">No Data Available</div>
      </div>
    );
  }

  const formatYear = (label) => {
    if (typeof label === "string" && label.includes("-")) {
      return label.split("-")[0];
    }
    return label;
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <div className="chart-header-container">
        <div className="chart-header-inner">
          <h3 className="chart-title">{title}</h3>
          <div className="chart-metadata">
            {unit && `Unit: ${unit}`} | Last updated:{" "}
            {new Date(lastUpdate).toLocaleDateString()}
          </div>
          <div className="chart-description">{description}</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={380}>
        <AreaChart
          data={readings}
          margin={{ top: 10, right: 30, left: 30, bottom: 30 }}
        >
          <defs>
            <linearGradient
              id={`gradient-${color}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color} stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f0f0"
            vertical={false}
          />

          <XAxis
            dataKey="label"
            tickFormatter={formatYear}
            tick={{ fill: "#555", fontSize: 12 }}
            axisLine={{ stroke: "#ddd" }}
            tickMargin={10}
          />

          <YAxis
            tick={{ fill: "#555", fontSize: 12 }}
            axisLine={{ stroke: "#ddd" }}
            tickMargin={10}
            label={{
              value: unit ? `Unit (${unit})` : "Value",
              angle: -90,
              position: "insideLeft",
              fontSize: 12,
              fill: "#555",
              offset: 0,
            }}
          />

          <Tooltip
            formatter={(value) => [`${value} ${unit}`, "Unit"]}
            labelFormatter={(label) => {
              const [year, month] = label.split("-");
              return `${month}/${year}`;
            }}
            contentStyle={{
              background: "rgba(255, 255, 255, 0.98)",
              borderRadius: 6,
              border: "1px solid #eee",
              fontSize: 13,
            }}
          />

          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={1}
            fill={`url(#gradient-${color})`}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div
        style={{
          fontSize: 10,
          color: "#999",
          textAlign: "right",
          marginTop: 4,
        }}
      >
        Source:{" "}
        <a
          href={factorData?.data?.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {factorData?.data?.source}
        </a>
      </div>
    </div>
  );
};

export default CustomAreaChart;
