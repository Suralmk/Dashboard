import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Components/Button'
import useGlobal from '../Core/global'
import { api } from '../Core/config'

const Login = () => {
  const navigate = useNavigate()
  const user = useGlobal(state => state.user)
  const addToast = useGlobal(state => state.addToast)
  const login = useGlobal(state => state.login)

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  })
  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async event => {
    event.preventDefault()
    try {
      const res = await api.post('token/', userInfo, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.status === 200) {
        login(res.data)
        navigate('/')
        addToast('Succesfully Logged In!', 'success')
      }
    } catch (err) {
      addToast(
        'Please check, There is a problem with your username or password!',
        'failure'
      )
    }
  }

  return (
    <div className='min-h-screen w-full bg-main-gray flex flex-col items-center justify-center'>
      <h1 className='text-[30px] text-main-blue font-bold mb-[30px]'>
        Dashboard
      </h1>
      <div className='flex flex-col px-5 py-10 bg-white w-[400px] rounded-lg '>
        <h1 className='text-[20px] font-bold text-main-black text-center mb-[40px]'>
          Sign In
        </h1>

        <form className='flex flex-col gap-3'>
          <div className='flex flex-col w-full gap-1'>
            <p className='text-[15px] text-dark-two'>Username</p>
            <input
              type='text'
              placeholder='Enter Username'
              name='username'
              className='w-full px-3 py-2  text-sm rounded-md  text-main-black outline-none '
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>

          <Link className='text-[13px] font-light  text-main-blue text-start mt-[10px] mb-[25px]'>
            Forgot Password?
          </Link>

          <Button
            color='#ffffff'
            bg='#2e5df4'
            text='Sign In'
            action={handleLogin}
          />
        </form>
        <div className='w-full mt-[25px] flex gap-3'>
          <p className='text-[12px] text-dark-two'>
            {' '}
            <span className='font-bold'>username:</span> admin
          </p>
          <p className='text-[12px] text-dark-two'>
            {' '}
            <span className='font-bold'>password:</span> admin
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
