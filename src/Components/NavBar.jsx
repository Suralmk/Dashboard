import React, { useState } from 'react'
import { images } from '../Constants'
import useGlobal from '../Core/global'
import { api } from '../Core/config'
import { jsondata } from '../Constants/jsondata'
import { LuChevronDown } from 'react-icons/lu'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {
  const user = useGlobal(state => state.user)
  const addToast = useGlobal(state => state.addToast)
  const handleDataAdding = async () => {
    try {
      const res = await api.post('/add_data/', jsondata)
      if (res.data.created) {
        addToast(res.data.message, 'success')
      }
    } catch (err) {
      addToast(err.message, 'failure')
    }
  }
  const logout = useGlobal(state => state.logout)
  const navigate = useNavigate()
  const Profile = () => {
    return (
      <div className='flex p-2 bg-white absolute -bottom-[40px] w-full left-0'>
        <button
          className='cursor-pointer w-full text-start'
          onClick={() => {
            logout()
            navigate('/login')
            addToast('Logged out', 'success')
          }}
        >
          Logout
        </button>
      </div>
    )
  }

  const [profile, setProfile] = useState(false)
  return (
    <div className='h-full w-full p-5 bg-main-gray flex'>
      <div className='flex w-full justify-between items-center'>
        <h1 className='text-[25px] text-main-blue font-bold'>Dashboard</h1>

        <div className='flex items-center gap-5'>
          {user.username === 'sura' ? (
            <div>
              <Button
                action={handleDataAdding}
                text='Add Data'
                bg='rgba(46,93,244,0.3606617647058824)'
                color='#ffffff'
              />
            </div>
          ) : (
            <></>
          )}

          <div className='flex items-center h-[50px] w-max relative gap-3 bg-white rounded-lg py-1 px-2'>
            <img
              src={images.person1}
              alt=''
              className='h-auto w-[35px] object-cover rounded-lg'
            />
            <div className='flex flex-col'>
              <p className='text-[15px] font-bold'>{user.first_name}</p>
              <p className='text-[13px] text-dark-three'>{user.username}</p>
            </div>
            <LuChevronDown
              size={20}
              onClick={() => {
                setProfile(!profile)
              }}
            />
            {profile ? <Profile /> : <></>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
