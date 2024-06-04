import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LuView,
  LuBarChart3,
  LuGlobe2,
  LuLamp,
  LuPackage,
  LuMenu
} from 'react-icons/lu'

const Menus = ({ showmenu, setShowMenu }) => {
  return (
    <div className='flex max-w-[350px]  justify-between  min-h-[100vh] bg-main-gray px-2 py-5 '>
      <div className='flex flex-col w-full h-max'>
        <div>
          <LuMenu
            className=' rounded-lg cursor-pointer f mb-3 ml-1 flex  items-center'
            size={25}
            onClick={() => {
              setShowMenu(!showmenu)
            }}
          />
        </div>

        <NavLink
          to={'/'}
          style={({ isActive }) => {
            return isActive ? { backgroundColor: 'rgba(255, 255, 255, 1)' } : {}
          }}
          className='p-2 h-max w-full rounded-lg  focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
        >
          <LuView />
          {showmenu ? 'Overview' : ''}
        </NavLink>
        <NavLink
          to={'/anlytics'}
          style={({ isActive }) => {
            return isActive ? { backgroundColor: 'rgba(255, 255, 255, 1)' } : {}
          }}
          className='p-2 h-max w-full rounded-lg focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
        >
          <LuBarChart3 />
          {showmenu ? 'Anlytics' : ''}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { backgroundColor: 'rgba(255, 255, 255, 1)' } : {}
          }}
          to={'/region'}
          className='p-2 h-max w-full rounded-lg focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
        >
          <LuGlobe2 />
          {showmenu ? 'Region' : ''}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { backgroundColor: 'rgba(255, 255, 255, 1)' } : {}
          }}
          to={'/country'}
          className='p-2 h-max w-full rounded-lg focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
        >
          <LuGlobe2 />
          {showmenu ? 'Country' : ''}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { backgroundColor: 'rgba(255, 255, 255, 1)' } : {}
          }}
          to={'/sector'}
          className='p-2 h-max w-full rounded-lg focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
        >
          <LuPackage />
          {showmenu ? 'Sector' : ''}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { backgroundColor: 'rgba(255, 255, 255, 1)' } : {}
          }}
          to={'/topic'}
          className='p-2 h-max w-full rounded-lg focus:bg-white hover:bg-white text-main-black mb-3 flex gap-2 items-center'
        >
          <LuLamp />
          {showmenu ? 'Topic' : ''}
        </NavLink>
      </div>
    </div>
  )
}

export default Menus
