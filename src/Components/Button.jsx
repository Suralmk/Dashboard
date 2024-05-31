import React from 'react'

const Button = ({ bg, text, color, action }) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        color: color
      }}
      className='px-3 py-2 w-full text-center font-light text-15px bg-red-300 rounded-lg'
      onClick={event => action(event)}
    >
      {text}
    </button>
  )
}

export default Button
