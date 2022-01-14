import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = props => {
  let totalValue = 0;

  for (const dataPoint of props.dataPoints) {
    totalValue += dataPoint.value;
  }

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          totalValue={totalValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
