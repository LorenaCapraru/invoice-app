"use client";
import "./Main.css";
import invoicesData from "./invoices.json";
import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import InvoiceBarChart from "../InvoiceBarChart/InvoiceBarChart";
interface Invoice {
  invoice_number: string;
  status: string;
}

const Main = () => {
  const [paid, setPaid] = useState<Invoice[]>([]);
  const [send, setSend] = useState<Invoice[]>([]);
  const [pending, setPending] = useState<Invoice[]>([]);
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
    const filterPaid = invoicesData.invoices.filter(
      (el) => el.status === "paid"
    );
    const filterSend = invoicesData.invoices.filter(
      (el) => el.status === "send"
    );
    const filterPending = invoicesData.invoices.filter(
      (el) => el.status === "pending"
    );

    setPaid(filterPaid);
    setSend(filterSend);
    setPending(filterPending);

    const totalInvoices = invoicesData.invoices.length;
    const paidPercentage = (filterPaid.length / totalInvoices) * 100;
    const sendPercentage = (filterSend.length / totalInvoices) * 100;
    const pendingPercentage = (filterPending.length / totalInvoices) * 100;

    const ctx = document.getElementById("percentageChart") as HTMLCanvasElement;

    //first  gradient
    const gradient = ctx.getContext("2d")!.createLinearGradient(0, 0, 400, 0);
    gradient.addColorStop(0, "#1fdad6"); // start color
    gradient.addColorStop(0.5, "#29e4cf"); // middle color
    gradient.addColorStop(1, "#33edc9"); // end color

    //second  gradient
    const gradient2 = ctx.getContext("2d")!.createLinearGradient(0, 0, 400, 0);
    gradient2.addColorStop(0, "#1cacfa"); // start color
    gradient2.addColorStop(0.5, "#11c9fb"); // middle color
    gradient2.addColorStop(1, "#0ccbfc"); // end color

    //third  gradient
    const gradient3 = ctx.getContext("2d")!.createLinearGradient(0, 0, 400, 0);
    gradient3.addColorStop(0, "#ffab00"); // start color
    gradient3.addColorStop(0.5, "#ffc73a"); // middle color
    gradient3.addColorStop(1, "#ffe27a"); // end color
    setChartData({
      labels: ["Paid", "Send", "Pending"],
      datasets: [
        {
          data: [
            paidPercentage.toFixed(2),
            sendPercentage.toFixed(2),
            pendingPercentage.toFixed(2),
          ],
          backgroundColor: [gradient, gradient2, gradient3],
        },
      ],
    });
  }, []);

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
        <div className="chart">
          <p className="total-invoices">{invoicesData.invoices.length}</p>
          <canvas id="percentageChart" width={20} height={20} />
        </div>
        <InvoiceBarChart invoices={invoicesData.invoices} />
      </div>
    </div>
  );
};

export default Main;