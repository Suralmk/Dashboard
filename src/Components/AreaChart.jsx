// src/AreaChart.js
import React from 'react'
import { Line } from 'react-chartjs-2'
import { registerables, Chart } from 'chart.js'

Chart.register(...registerables)

const AreaChart = ({ labels, data, title }) => {
  const chartdata = {
    labels: labels,
    datasets: [
      {
        label: 'Relevance',
        data: data?.relevance,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: '#132fcc',
        borderWidth: 1,
        tension: 0.4
      },
      {
        label: 'Intensity',
        data: data?.intensity,
        fill: false,
        borderColor: 'rgba(236, 124, 11, 0.815)',
        borderWidth: 1.5,
        tension: 0.4
      },
      {
        label: 'Likelihood',
        data: data?.likelihood,
        fill: false,
        borderColor: 'rgba(10, 156, 22, 0.781)',
        borderWidth: 1.5,
        tension: 0.4
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: title
    },
    filler: {
      propagate: false
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
    <div style={{ height: 400, width: '100%' }}>
      <Line data={chartdata} options={options} />
    </div>
  )
}

export default AreaChart
