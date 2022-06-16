import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointsAmounts = props.dataPoints.map(x => x.value);
    const totalValue = Math.max(...dataPointsAmounts);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
