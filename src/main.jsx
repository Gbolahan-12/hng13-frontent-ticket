import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css' // import shared style + small overrides
import App from './App'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import Tickets from './pages/Tickets'
import Landing from './pages/Landing'

function Protected({ children }) {
  const session = localStorage.getItem('ticketapp_session')
  if (!session) return <Navigate to="/auth/login" replace />
  return children
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Landing />} />
        <Route path="auth/*" element={<AuthPage/>} />
        <Route path="dashboard" element={<Protected><Dashboard /></Protected>} />
        <Route path="tickets" element={<Protected><Tickets /></Protected>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
