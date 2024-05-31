import React from 'react'
import BarChart from '../Components/BarChart'
import { useOutletContext } from 'react-router-dom'
const Country = ({}) => {
  const data = useOutletContext().data
  return (
    <div>
      <div className='p-[15px] bg-white col-span-3 row-span-2  gap-3 overflow-hidden min-h-[300px]  rounded-lg'>
        <h1 className='text-[30px]'>Country</h1>
        <BarChart
          labels={data?.country_intensity?.labels}
          data={data?.country_intensity?.data}
          label='Intensity'
        />
      </div>
    </div>
  )
}

export default Country
