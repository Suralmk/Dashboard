import React from 'react'
import AreaChart from '../Components/AreaChart'
import { useOutletContext } from 'react-router-dom'
const Sector = ({}) => {
  const data = useOutletContext().data
  return (
    <div>
      <div className='p-[15px] bg-white col-span-3 row-span-2  gap-3 overflow-hidden min-h-[300px]  rounded-[50pxs]'>
        <h1 className='text-[30px]'>Sector</h1>
        <AreaChart
          labels={data?.sector_ril?.labels}
          data={data?.sector_ril?.data}
          title='Sector Intesnity, Relevance and Likelihood Anlysis '
        />
      </div>
    </div>
  )
}

export default Sector
