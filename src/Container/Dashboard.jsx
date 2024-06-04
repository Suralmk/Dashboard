import React from 'react'
import DoughnutChart from '../Components/DoughnutChart'
import BarChart from '../Components/BarChart'
import LineChart from '../Components/LineChart'
import AreaChart from '../Components/AreaChart'
import useGlobal from '../Core/global'
import Activity from '../Components/Activity'
import { data as da } from '../Constants'
import { useOutletContext } from 'react-router-dom'
import { LuLamp, LuGlobe } from 'react-icons/lu'
const Dashboard = () => {
  const data = useOutletContext().data
  const user = useGlobal(state => state.user)

  return (
    <div className='min-h-[90vh] w-full bg-main-gray flex dashboard  px-4 py-5 smm:px-1 sm:px-2 md:px-3 lg:px-4'>
      <div className=''>
        <h1 className='text-[30px] smm:text-[20px] sm:text-[25px]  md:text-[28px] '>
          Hi, {user.first_name} {user.last_name}
        </h1>
        <p className='font-light text-dark-three text-sm '>
          Today's date: {new Date().toDateString()}
        </p>

        <div className='dashboard_container grid grid-cols-3 gap-4 auto-rows-mi w-full mt-5'>
          <div className='p-[15px] bg-white  flex flex-col  gap-5 overflow-hidden rounded-lg smm:col-span-3 sm:col-span-2 md:col-span-1 lg:col-span-1 '>
            <h1 className='text-[25px] font-semibold flex items-center h-max gap-3 smm:text-[15px] sm:text-[18px]  '>
              <LuGlobe className='text-main-blue ' /> Total Region
            </h1>
            <h1 className='text-[30px] smm:text-[18px] '>
              {data?.region_intensity?.labels.length}
            </h1>
            <p className='font-light text-dark-three text-sm smm:text-[15px] '>
              High Intensity:{' '}
              <span className='font-semibold smm:text-[15px] '>
                {' '}
                Northern America
              </span>
            </p>
          </div>
          <div className='p-[15px] bg-white   flex flex-col gap-5 overflow-hidden rounded-lg smm:col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            <h1 className='text-[25px] font-semibold flex items-center h-max gap-3 sm:text-[18px] smm:text-[15px] '>
              <LuGlobe className='text-color-three  ' /> Total Countries
            </h1>
            <h1 className='text-[30px] smm:text-[18px] '>
              {' '}
              {data?.country_intensity?.labels.length}
            </h1>
            <p className='font-light text-dark-three text-sm smm:text-[15px] '>
              High Intensity:{' '}
              <span className='font-semibold smm:text-[15px] '>
                {' '}
                United States of America
              </span>
            </p>
          </div>
          <div className='p-[15px] bg-white flex flex-col gap-5 overflow-hidden rounded-lg smm:col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-1'>
            <h1 className='text-[25px] font-semibold flex items-center h-max gap-3 smm:text-[15px] sm:text-[18px]'>
              <LuLamp className='text-color-five  ' /> Total Topics
            </h1>
            <h1 className='text-[30px] smm:text-[20px] '>
              {data?.topic_intensity?.labels.length}
            </h1>
            <p className='font-light text-dark-three text-sm smm:text-[15px] '>
              High Likeihood: <span className='font-semibold'> Oil </span>
            </p>
          </div>
          <div className='p-[15px] bg-white col-span-2  gap-3 overflow-hidden min-h-[300px]  rounded-lg smm:col-span-3 md:col-span-3 lg:col-span-2 '>
            <h1 className='text-[25px] font-semibold flex items-center h-max gap-3 sm:text-[18px]'>
              Sector Intesnity
            </h1>

            <AreaChart
              labels={data?.sector_ril?.labels}
              data={data?.sector_ril?.data}
              title='Sector Intesnity, Relevance and Likelihood Anlysis '
            />
          </div>

          <div className='p-[15px] justify-between bg-white flex flex-col  gap-2 overflow-hidden min-h-[300px] smm:col-span-3 sm:col-span-1  md:flex-row md:col-span-2 lg:flex-col  rounded-lg  lg:col-span-1'>
            <div className='flex justify-between items-center sm:flex-col md:flex-col  lg:flex-row  '>
              <div className='flex flex-col items-start gap-2'>
                <h1 className='text-[25px] font-semibold flex items-center h-max gap-2 sm:text-[18px]'>
                  Region
                </h1>
                <h1 className='text-[15px] font-lighter'>World: 1325 </h1>
              </div>

              <DoughnutChart
                labels={data?.region_intensity?.labels}
                data={data?.region_intensity?.data}
                label='Intensity'
              />
            </div>
            <div className='flex justify-between items-center sm:flex-col md:flex-col  lg:flex-row'>
              <div className='flex flex-col items-start gap-2'>
                <h1 className='text-[25px] font-semibold flex items-center h-max gap-2 sm:text-[18px]'>
                  Sector
                </h1>
                <h1 className='text-[15px] font-lighter'>Energy: 3370</h1>
              </div>
              <DoughnutChart
                labels={data?.sector_intensity?.labels}
                data={data?.sector_intensity?.data}
                label='Intensity'
              />
            </div>
          </div>
          <div className='p-[15px] bg-white   gap-3 overflow-hidden overflow-y-scroll rounded-lg smm:col-span-3 sm:col-span-2  md:h-[400px] md:col-span-1 lg:row-span-2 lg:col-span-1 lg:h-auto '>
            <h1 className='sm:text-[18px] text-[25px] font-semibold flex items-center gap-2'>
              Recent Activites
            </h1>

            {da.activities.map((act, id) => (
              <Activity key={id} activity={act.activity} time={act.time} />
            ))}
          </div>
          <div className='p-[15px] bg-white col-span-2  gap-3  rounded-lg smm:col-span-3 sm:col-span-3 md:col-span-3  lg:col-span-2  '>
            <h1 className='text-[25px] font-semibold flex items-center h-max gap-2 sm:text-[18px]'>
              Topic intensity{' '}
            </h1>

            <LineChart
              labels={data?.topic_intensity?.labels}
              data={data?.topic_intensity?.data}
              label='Intensity'
            />
          </div>
          <div className='p-[15px] bg-white col-span-2  gap-3 overflow-hidden  rounded-lg smm:col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2'>
            <h1 className='text-[25px] font-semibold flex items-center h-max gap-2 sm:text-[18px]'>
              Topic Relevance Relation
            </h1>
            <BarChart
              labels={data?.topic_relevance?.labels}
              data={data?.topic_relevance?.data}
              label='Relevance'
            />
          </div>
          <div className='p-[15px] bg-white col-span-3 row-span-2  gap-3 overflow-hidden min-h-[300px]  rounded-lg'>
            <h1 className='text-[25px] font-semibold flex items-center h-max gap-2 sm:text-[18px]'>
              Country
            </h1>

            <BarChart
              labels={data?.country_intensity?.labels}
              data={data?.country_intensity?.data}
              label='Intensity'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
