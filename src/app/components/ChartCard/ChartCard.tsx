"use client";
import "./ChartCard.css";
import { useState, useEffect } from "react";

const ChartCard = () => {
  return (
    <div className="chart-main">
      <canvas id="percentageChart" width={400} height={400} />
    </div>
  );
};

export default ChartCard;
