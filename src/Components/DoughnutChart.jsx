import React from 'react'

import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({ label, data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        backgroundColor: [
          'rgb(89, 179, 156)',
          'rgb(86, 172, 230)',
          'rgb(255, 205, 86)',

          'rgb(121, 170, 108)',
          'rgb(233, 137, 137)',
          'rgb(86, 116, 155)',
          'rgb(90, 165, 40)',
          'rgba(107, 29, 209, 0.267)',
          'rgb(234, 243, 112)',
          'rgba(35, 241, 86, 0.637)',
          'rgb(197, 238, 178)',
          'rgb(248, 116, 177)',
          'rgb(143, 30, 172)',
          'rgb(98, 107, 16)'
        ],
        borderWidth: 1,
        tension: 0.4
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'title'
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        grid: {
          display: false,
          drawBorder: false
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        display: false
      }
    }
  }
  return (
    <div style={{ height: 200, width: 200 }}>
      <Doughnut data={chartData} options={options} />
    </div>
  )
}

export default DoughnutChart
