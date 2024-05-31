import React from 'react'
import Button from '../Components/Button'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()

  const handleSingUp = event => {
    event.preventDefault()
    navigate('/dashboard')
  }
  return (
    <div className='min-h-screen w-full bg-main-gray flex flex-col items-center justify-center'>
      <h1 className='text-[30px] text-main-blue font-bold mb-[30px]'>
        Dashboard
      </h1>
      <div className='flex flex-col px-5 py-10 bg-white w-[400px] rounded-lg '>
        <h1 className='text-[20px] font-bold text-main-black text-center mb-2'>
          Sign Up
        </h1>
        <h1 className='text-[13px] font-light text-dark-three text-center mb-[30px]'>
          Already have an account?{' '}
          <span className=' text-main-blue'>
            <Link to={'/'}>Sign in here.</Link>
          </span>
        </h1>
        <form className='flex flex-col gap-3'>
          <div className='flex flex-col w-full gap-1'>
            <p className='text-[15px] text-dark-two'>First Name</p>
            <input
              type='text'
              placeholder='Enter first name'
              name='first_name'
              className='w-full px-3 py-2  text-sm rounded-md  text-main-black outline-none '
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <p className='text-[15px] text-dark-two'>Last Name</p>
            <input
              type='text'
              placeholder='Enter last name'
              name='last_name'
              className='w-full px-3 py-2  text-sm rounded-md  text-main-black outline-none '
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <p className='text-[15px] text-dark-two'>Username</p>
            <input
              type='text'
              placeholder='Enter Username'
              name='username'
              className='w-full px-3 py-2  text-sm rounded-md  text-main-black outline-none '
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <p className='text-[15px] text-dark-two'>Email</p>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              className='w-full px-3 py-2  text-sm rounded-md  text-main-black outline-none '
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <p className='text-[15px] text-dark-two'>Password</p>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              className='w-full px-3 py-2  text-sm rounded-md  text-main-black outline-none'
              id='password'
            />
          </div>
          <div className='mt-[30px]'></div>
          <Button
            color='#ffffff'
            bg='#2e5df4'
            text='Sign Up'
            action={handleSingUp}
          />
        </form>
      </div>
    </div>
  )
}

export default Register
