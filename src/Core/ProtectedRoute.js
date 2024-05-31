// src/components/ProtectedRoute.js

import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import useGlobal from './global'

const ProtectedRoute = ({ children }) => {
  const authenticated = useGlobal(state => state.authenticated)

  if (!authenticated) {
    return <Navigate to='/login' />
  }

  return children
}

export default ProtectedRoute
