import React, { lazy } from 'react'
import { Routes, Route } from 'react-router';

const Login = lazy(() => import('./pages/auth/Login'));

const App = () => {
  return (
    <Login />
  )
}

export default App;