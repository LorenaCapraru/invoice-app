"use client";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import Image from "../../../../node_modules/next/image";
import InvoiceBarChart from "../InvoiceBarChart/InvoiceBarChart";
import InvoiceTable from "../InvoiceTable/InvoiceTable";
import invoicesData from "./invoices.json";
import "./Main.css";

interface Invoice {
  invoice_number: string;
  status: string;
  total: number;
}

const Main: React.FC = () => {
  const [pieChartOpen, setPieChartOpen] = useState<boolean>(true);
  const [barChartOpen, setBarChartOpen] = useState<boolean>(true);
  const [chartOptions, setChartOptions] = useState<any>(null);

  useEffect(() => {
    const statuses = Array.from(
      new Set(invoicesData.invoices.map((invoice) => invoice.status))
    );
    const totalByStatus = statuses.map((status) =>
      invoicesData.invoices
        .filter((invoice) => invoice.status === status)
        .reduce((total, invoice) => total + invoice.total, 0)
    );

    const pieColors = ["#1fdad6", "#dfe3e69b", "#0092ff"];

    const options = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}:{c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: 10,
        data: statuses,
      },
      series: [
        {
          name: "Total Invoices",
          type: "pie",
          radius: "50%",
          center: ["50%", "60%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: statuses.map((status, index) => ({
            value: totalByStatus[index],
            name: status,
            itemStyle: {
              color: pieColors[index],
            },
          })),
        },
      ],
    };

    setChartOptions(options);
  }, []);

  return (
    <div className="main-section">
      <h1>Invoices Overview</h1>
      <div className="main-body">
        <div className="charts-icons-wrapper">
          <div
            className="icon-title"
            onClick={() => setPieChartOpen(!pieChartOpen)}
          >
            <p className="invoices-status">Invoices Status</p>
            <Image
              src={
                pieChartOpen
                  ? "/icons/piechart-color.svg"
                  : "/icons/piechart.svg"
              }
              alt="pie chart"
              width={20}
              height={20}
              className="pie-chart-icon"
            />
          </div>
          <div
            className="icon-title"
            onClick={() => setBarChartOpen(!barChartOpen)}
          >
            <p className="monthly-income">Monthly Income</p>
            <Image
              src={
                barChartOpen
                  ? "/icons/barchart-color.svg"
                  : "/icons/barchart.svg"
              }
              alt="bar chart"
              width={20}
              height={20}
              className="pie-chart-icon"
            />
          </div>
        </div>
        <div className="charts-display">
          {pieChartOpen && (
            <div className="chart">
              {chartOptions && (
                <ReactECharts option={chartOptions} className="pie-chart" />
              )}
            </div>
          )}
          {barChartOpen && <InvoiceBarChart invoices={invoicesData.invoices} />}
        </div>
      </div>
      <InvoiceTable invoicesData={invoicesData} />
    </div>
  );
};

export default Main;
