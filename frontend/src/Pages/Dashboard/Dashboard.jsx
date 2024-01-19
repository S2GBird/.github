import React, { useState, memo } from 'react'
import apiClient from '../../Services/apiClient'
import { useAuthContext } from '../../Services/authProvider'
import DashboardStyles from './Dashboard.module.css'

function Dashboard () {
  const { user } = useAuthContext()
  const [username, setUsername] = useState(user.username)
  const [userId, setUserId] = useState(user.userId)
  const [email, setEmail] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')

  function getUserInfo (userId) {
    apiClient.getUserInfo(userId).then(res => {
      setEmail(res.data.email)
      setFName(res.data.fName)
      setLName(res.data.lName)
    })
  }

  getUserInfo(user.userId)

  return (
    <div className={DashboardStyles['text-center']}>
      <div>Dashboard</div>
      <div>User ID: {userId}</div>
      <div>Email: {email}</div>
      <div>Username: {username}</div>
      <div>First Name: {fName}</div>
      <div>Last Name: {lName}</div>
    </div>
  )
}

export default memo(Dashboard)
