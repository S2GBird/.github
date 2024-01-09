import React from 'react'
import apiClient from '../../Services/apiClient'
import { useAuthContext } from '../../Services/authProvider'
import { useState, memo } from 'react'
import DashboardStyles from './Dashboard.module.css'
import { useNavigate } from 'react-router-dom'

function Dashboard () {
  const { user } = useAuthContext()
  const [username, setUsername] = useState(user.username)
  const [userId, setUserId] = useState(user.userId)
  const [email, setEmail] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const navigate = useNavigate()

  function getUserInfo(userId) {
    apiClient.getUserInfo(userId).then(res => {
      setEmail(res.data.email)
      setFName(res.data.fName)
      setLName(res.data.lName)
    });
  }

  getUserInfo(user.userId)

  return (
    <div className={DashboardStyles['text-center']}>
      <div>Dashboard</div>
      <div>User ID: { userId }</div>
      <div>Email: { email }</div>
      <div>Username: { username }</div>
      <div>First Name: { fName }</div>
      <div>Last Name: { lName }</div>
      <button onClick={() => navigate('/example')}>Example Page</button>
    </div>
  )
}

export default memo(Dashboard)
