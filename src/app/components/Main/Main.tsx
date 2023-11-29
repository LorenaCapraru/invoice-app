"use client";
import "./Main.css";
import invoicesData from "./invoices.json";
import ChartCard from "../ChartCard/ChartCard";
import React, { useEffect, useState } from "react";
import Chart from "chart.js";

interface Invoice {
  invoice_number: string;
  status: string;
}

const Main = () => {
  const [paid, setPaid] = useState<Invoice[]>([]);
  const [send, setSend] = useState<Invoice[]>([]);
  const [pending, setPending] = useState<Invoice[]>([]);

  useEffect(() => {
    const filterPaid = [...invoicesData.invoices].filter(
      (el) => el.status === "paid"
    );
    const filterSend = [...invoicesData.invoices].filter(
      (el) => el.status === "send"
    );
    const filterStatus = [...invoicesData.invoices].filter(
      (el) => el.status === "status"
    );
    setPaid(filterPaid);
    setSend(filterPaid);
    setPending(filterPaid);

    const totalInvoices = invoicesData.invoices.length;
    const paidPercentage = (paid.length / totalInvoices) * 100;
    const sendPercentage = (send.length / totalInvoices) * 100;
    const pendingPercentage = (pending.length / totalInvoices) * 100;

    // Update chart data
    setChartData({
      labels: ["Paid", "Send", "Pending"],
      datasets: [
        {
          data: [paidPercentage, sendPercentage, pendingPercentage],
          backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        },
      ],
    });
  }, []);

  const [chartData, setChartData] = useState<Chart.ChartData>({
    labels: ["Paid", "Send", "Pending"],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  });

  useEffect(() => {
    // Create chart
    const ctx = document.getElementById("percentageChart") as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: "doughnut",
        data: chartData,
      });
    }
  }, [chartData]);

  return (
    <div className="main-section">
      <h1>Invoices</h1>
      <div className="main-body">
        {/* {invoicesData.invoices.map((el, index) => (
          <div key={index}>{el.status}</div>
        ))} */}
        <ChartCard />
        <canvas id="percentageChart" width={400} height={400} />;
      </div>
    </div>
  );
};

export default Main;
