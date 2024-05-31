import React from 'react'
import { Bar } from 'react-chartjs-2'
import { registerables, Chart } from 'chart.js'
Chart.register(...registerables)
const BarChart = ({ labels, data, label }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: [
          'rgb(159, 53, 173)',
          'rgb(96, 172, 223)',
          'rgb(182, 132, 16)',
          'rgb(126, 224, 142)',
          'rgb(110, 114, 168)'
        ]
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Countries with higer intensity'
      }
    },
    scales: {
      x: {
        type: 'category',
        labels: labels,
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        grid: {
          display: false,
          drawBorder: true
        }
      }
    }
  }
  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  )
}

export default BarChart
