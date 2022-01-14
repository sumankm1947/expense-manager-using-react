import React from "react";

import "./ChartBar.css";

const ChartBar = props => {
  let fillHeightValue = "0%";
  if (props.totalValue > 0) {
    fillHeightValue = Math.round((props.value / props.totalValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: fillHeightValue }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
