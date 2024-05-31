import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LuView,
  LuBarChart3,
  LuGlobe2,
  LuLamp,
  LuPackage
} from 'react-icons/lu'

const Menus = () => {
  return (
    <div>
      <div className='flex w-[200px] justify-between  min-h-[100vh] bg-main-gray px-4 py-5 '>
        <div className='flex flex-col w-full h-max'>
          <NavLink
            to={'/'}
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: 'rgba(255, 255, 255, 1)' }
                : {}
            }}
            className='p-2 h-max w-full rounded-lg  focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
          >
            <LuView />
            Overview
          </NavLink>
          <NavLink
            to={'/anlytics'}
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: 'rgba(255, 255, 255, 1)' }
                : {}
            }}
            className='p-2 h-max w-full rounded-lg focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
          >
            <LuBarChart3 />
            Anlytics
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: 'rgba(255, 255, 255, 1)' }
                : {}
            }}
            to={'/region'}
            className='p-2 h-max w-full rounded-lg focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
          >
            <LuGlobe2 />
            Region
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: 'rgba(255, 255, 255, 1)' }
                : {}
            }}
            to={'/country'}
            className='p-2 h-max w-full rounded-lg focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
          >
            <LuGlobe2 />
            Country
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: 'rgba(255, 255, 255, 1)' }
                : {}
            }}
            to={'/sector'}
            className='p-2 h-max w-full rounded-lg focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
          >
            <LuPackage />
            Sector
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { backgroundColor: 'rgba(255, 255, 255, 1)' }
                : {}
            }}
            to={'/topic'}
            className='p-2 h-max w-full rounded-lg focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
          >
            <LuLamp />
            Topic
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Menus
