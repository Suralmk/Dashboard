import React, { useEffect } from 'react'
import useGlobal from '../Core/global'
const Toast = ({ id, message, type }) => {
  const removeToast = useGlobal(state => state.removeToast)

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id)
    }, 5000)

    return () => clearTimeout(timer)
  }, [id, removeToast])

  return (
    <div
      className={`${
        type === 'success' ? 'bg-success' : 'bg-failure'
      } font-light text-[16px] text-dark-two p-4  w-[300px] h-auto fixed z-10 top-[20px] right-[30px] rounded-lg`}
    >
      {message}
    </div>
  )
}

export default Toast
