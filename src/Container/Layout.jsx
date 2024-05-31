import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Menus from '../Components/Menus'
import useGlobal from '../Core/global'
import { useNavigate } from 'react-router-dom'
import { api } from '../Core/config'
const Layout = () => {
  const navigate = useNavigate()
  const authenticated = useGlobal(state => state.authenticated)
  const addToast = useGlobal(state => state.addToast)
  const [datas, setDatas] = useState([])
  const fetchDashboardData = async () => {
    try {
      const res = await api.get('/dashboard/')

      setDatas(res.data)
    } catch (err) {
      addToast(err.message, 'failure')
    }
  }
  useEffect(() => {
    fetchDashboardData()
  }, [])
  useEffect(() => {
    if (!authenticated) {
      navigate('/login')
    }
  }, [])
  if (authenticated) {
    return (
      <div className='flex flex-col h-screen w-full '>
        <div>
          <NavBar />
        </div>
        <div className='flex w-full h-full '>
          <div className='menus'>
            <Menus />
          </div>
          <div className='outlet overflow-y-scroll w-full '>
            <Outlet context={{ data: datas }} />
          </div>
        </div>
      </div>
    )
  } else {
    navigate('/login')
  }
}

export default Layout
