// src/AreaChart.js
import React from 'react'
import { Pie } from 'react-chartjs-2'
import { registerables, Chart } from 'chart.js'

Chart.register(...registerables)
const PieChart = ({ labels, title, data }) => {
  const chartdata = {
    labels: labels,
    datasets: [
      {
        label: 'Relevance',
        data: data,
        fill: false,
        backgroundColor: [
          'rgb(57, 146, 248)',
          'rgb(235, 27, 27)',
          'rgb(234, 238, 22)',
          'rgba(107, 29, 209, 0.267)',
          'rgba(77, 117, 8, 0.637)',
          'rgb(81, 218, 18)',
          'rgb(10, 198, 255)',
          'rgb(143, 30, 172)',
          'rgb(98, 107, 16)'
        ],

        borderWidth: 0
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
    plugins: {
      legend: {
        position: 'bottom',
        display: false
      }
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
    <div style={{ height: 250, width: '100%' }}>
      <Pie data={chartdata} options={options} />
    </div>
  )
}

export default PieChart
