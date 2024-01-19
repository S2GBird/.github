import React, { createContext, useContext, useState } from 'react'
import apiClient from './apiClient'
const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ username: '', userId: '' })
  const [globalError, setGlobalError] = useState('')

  // Logout a user completely from site and clear all objects
  const logoutUser = async () => {
    setUser({ username: '', userId: '' })
    setGlobalError('')
    await apiClient.logout()
  }

  const authContextValues = {
    user, setUser, globalError, setGlobalError, logoutUser
  }

  return (
    <AuthContext.Provider value={authContextValues}>
      <>{children}</>
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
