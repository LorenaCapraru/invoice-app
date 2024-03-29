import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import "./InvoiceBarChart.css";

interface Invoice {
  date: string;
  total: number;
}

interface Props {
  invoices: Invoice[];
}

const InvoiceBarChart: React.FC<Props> = ({ invoices }) => {
  const [chartOptions, setChartOptions] = useState<any>(null);

  useEffect(() => {
    const months = Array.from(
      new Set(invoices.map((invoice) => invoice.date.split("/")[1]))
    );
    const totalByMonth = months.map((month) =>
      invoices
        .filter((invoice) => invoice.date.split("/")[1] === month)
        .reduce((total, invoice) => total + invoice.total, 0)
    );

    const barColors = [
      "#1fdad6",
      "#29e4cf",
      "#33ecd9",
      "#1fdad6",
      "#29e4cf",
      "#33ecd9",
      "#1fdad6",
      "#29e4cf",
      "#33ecd9",
      "#1fdad6",
      "#29e4cf",
      "#33ecd9",
    ];

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
        axisLabel: {
          // Set the rotation angle for the labels to 0 degrees (horizontal)
          rotate: 0,
          interval: 0, // Show all labels
          formatter: (value: string) => value, // Optional formatter if needed
        },
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
          itemStyle: {
            color: (params: any) => barColors[params.dataIndex],
          },
        },
      ],
    };
    setChartOptions(options);
  }, [invoices]);

  return (
    <div>
      {chartOptions && (
        <ReactECharts option={chartOptions} className="bar-chart" />
      )}
    </div>
  );
};

export default InvoiceBarChart;
