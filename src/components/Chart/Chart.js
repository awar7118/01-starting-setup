import React from "react";
import ChartBar from "./Chartbar";
import "./Chart.css";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        // we cant to render chartbar component for each datapoint.
        // Maxvalue is used to chart value against.
        <chartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
