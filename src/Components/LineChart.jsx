// src/AreaChart.js
import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = ({ labels, title, data, label }) => {
  const chartdata = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: '#132fcc',
        borderWidth: 1,
        tension: 0.4
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: title
    },
    filler: {
      propagate: true
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
          drawBorder: false
        }
      }
    }
  }

  return (
    <div>
      <Line data={chartdata} options={options} />
    </div>
  )
}

export default LineChart
