import React from 'react'

const Activity = ({ activity, time }) => {
  return (
    <div className='flex flex-col items-start gap-[1px] g-full bg-white my-[13px]'>
      <div className='w-full text-[15px] text-dark-two'>{activity}</div>
      <div className='w-full text-[13px] text-dark-three'>{time}</div>
    </div>
  )
}

export default Activity
