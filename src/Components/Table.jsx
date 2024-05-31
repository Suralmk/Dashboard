// src/ResponsiveTable.js
import React from 'react'

const ResponsiveTable = ({ data, columns }) => {
  return (
    <div className='table-container h-auto '>
      <table className='table'>
        <thead className='table-header'>
          {columns.map((column, index) => (
            <td key={index} className='table-header-cell'>
              {column}
            </td>
          ))}
        </thead>
        <tbody className='table-body'>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className='table-row'>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className='table-cell'>
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResponsiveTable
