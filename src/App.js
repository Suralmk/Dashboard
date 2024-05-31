import './App.css'

import React, { useEffect } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom'
import Login from './Container/Login'
import Register from './Container/Register'
import Dashboard from './Container/Dashboard'
import Layout from './Container/Layout'
import NotFound from './Components/NotFound'
import Anlytics from './Container/Anlytics'
import ToastContainer from './Container/ToastContainer'
import useGlobal from './Core/global'
import ProtectedRoute from './Core/ProtectedRoute'
import Topic from './Container/Topic'
import Sector from './Container/Sector'
import Country from './Container/Country'
import { DataGrid } from '@mui/x-data-grid'
import Region from './Container/Region'

function App () {
  const init = useGlobal(state => state.init)

  useEffect(() => {
    init()
  }, [init])

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            path=''
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='anlytics'
            element={
              <ProtectedRoute>
                <Anlytics />
              </ProtectedRoute>
            }
          />
          <Route
            path='country'
            element={
              <ProtectedRoute>
                <Country />
              </ProtectedRoute>
            }
          />
          <Route
            path='sector'
            element={
              <ProtectedRoute>
                <Sector />
              </ProtectedRoute>
            }
          />
          <Route
            path='topic'
            element={
              <ProtectedRoute>
                <Topic />
              </ProtectedRoute>
            }
          />
          <Route
            path='region'
            element={
              <ProtectedRoute>
                <Region />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path='/login' element={<Login />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
//"category" is not a registered scale.
