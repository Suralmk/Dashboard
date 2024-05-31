import React from 'react'
import AreaChart from '../Components/AreaChart'
import { useOutletContext } from 'react-router-dom'
const Region = ({}) => {
  const data = useOutletContext().data
  return (
    <div>
      <div className='p-[15px] bg-white col-span-3 row-span-2  gap-3 overflow-hidden min-h-[300px]  rounded-lg'>
        <h1 className='text-[30px]'>Regions</h1>

        <AreaChart
          labels={data?.region_ril?.labels}
          data={data?.region_ril?.data}
          title='Sector Intesnity, Relevance and Likelihood Anlysis '
        />
      </div>
    </div>
  )
}

export default Region
