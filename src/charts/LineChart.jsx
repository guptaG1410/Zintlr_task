import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const chartData = {
    series: [
      {
        name: "Desktops",
        data: [0, 0.7, 0, 2, 1]
      }
    ],
    options: {
      chart: {
        height: 550,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 3,  // Adjust the line thickness
        colors: ['#00AB84'] 
      },
      title: {
        // text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
      }
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={110} />
    </div>
  );
};

export default ApexChart;