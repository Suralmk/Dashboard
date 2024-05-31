import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import useGlobal from '../Core/global'

const NotFound = () => {
  const navigate = useNavigate()
  const authenticated = useGlobal(state => state.authenticated)
  const goToHome = () => {
    navigate('/')
  }
  return (
    <div className='h-screen w-full items-center justify-center flex bg-main-gray '>
      <div>
        <h1 className='text-[70px] '>
          {' '}
          <span className='font-bold text-main-blue text-[120px]'>
            404,
          </span>{' '}
          Page Not Found!
        </h1>
        <p className='font-light text-dark-two text-lg'>
          Couldn't find the page you are looking for!
        </p>
        <div className='mt-3 w-[250px]'>
          <Button
            bg='#ffffff'
            color='#2e5df4'
            text={!authenticated ? 'Login Now' : 'Back to Dashboard'}
            action={goToHome}
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound
