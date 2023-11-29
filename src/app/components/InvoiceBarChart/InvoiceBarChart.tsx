import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const InvoiceBarChart = ({ invoices }) => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    // Extracting data for chart
    const months = [
      ...new Set(invoices.map((invoice) => invoice.date.split("/")[1])),
    ];
    const totalByMonth = months.map((month) =>
      invoices
        .filter((invoice) => invoice.date.split("/")[1] === month)
        .reduce((total, invoice) => total + invoice.total, 0)
    );

    const options = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: months,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Total Invoices",
          type: "bar",
          barWidth: "60%",
          data: totalByMonth,
        },
      ],
    };

    setChartOptions(options);
  }, [invoices]);

  return (
    <div>
      <h1>Invoice Bar Chart</h1>
      {chartOptions && (
        <ReactECharts option={chartOptions} style={{ height: "400px" }} />
      )}
    </div>
  );
};

export default InvoiceBarChart;
