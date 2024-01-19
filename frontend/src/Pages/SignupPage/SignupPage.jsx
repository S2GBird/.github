import React, { useState, memo } from 'react'
import { Grid, Typography, TextField, InputLabel, Checkbox, FormControlLabel, Button, Divider } from '@mui/material'
import ChirpLogo from '../../Images/ChirpLogo.svg'
import bird from '../../Images/bird.jpg'
import { sxStyle, image, gridStyle, formContainer, inputLabelStyle, signinButton, buttonContainer, registerButton, buttonContainer2 } from './Signup.module.js'
import LoginStyles from '../Login Page/Login.module.css'
import apiClient from '../../Services/apiClient'
import { useNavigate } from 'react-router-dom'
import DEVELOPMENT_API_BASE_URL from '../../Services/constants'
import { useAuthContext } from '../../Services/authProvider'

function SignupPage () {
  const [userInfo, setUserInfo] = useState({ fName: '', lName: '', username: '', email: '', password: '', confirmPassword: '' })
  const { setUser } = useAuthContext()
  const handleInput = (input) => {
    const { name, value } = input.target
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/dashboard')
  }
  const [error, setError] = useState({})
  // error checking
  function isValid () {
    const errors = {}
    if (!userInfo.fName) {
      errors.fName = 'Enter the First Name.'
    }
    if (!userInfo.lName) {
      errors.lName = 'Enter the Last Name.'
    }
    if (!userInfo.username) {
      errors.username = 'Enter the Username.'
    }
    if (!userInfo.email) {
      errors.email = 'Enter the Email'
    }
    if (!userInfo.password) {
      errors.password = 'Enter the password'
    } else if (userInfo.password !== userInfo.confirmPassword) {
      errors.confirmPassword = "The password doesn't match"
    }

    setError(errors)
    return Object.keys(errors).length === 0
  };
  const [checked, setChecked] = useState(false)
  const isChecked = (event) => {
    setChecked(event.target.checked)
  }
  const handleSignup = (event) => {
    event.preventDefault() // cancel the default event behavior (browser refresh)
    if (isValid() && checked) {
      // if it's valid, request registrations to the server
      apiClient.register(userInfo).then(res => {
        if (res.data.success) {
          // console.log('userId ', res.data.userId);
          // console.log('username ', res.data.username);
          setUser({ username: res.data.username, userId: res.data.userId })
          handleNavigate() // navigate to dashboard
        } else {
          console.warn(res.data.message)
        }
      })
    } else {
      alert('Enter the Required Fields and Confirm the Terms and Conditions')
    }
  }

  return (
    <main>
      <Grid container style={sxStyle}>
        {/* left half page */}
        <Grid item xs={6} sx={sxStyle}>
          <img src={bird} alt='image1' style={image} />
        </Grid>
        {/* righ half page */}
        <Grid item xs={6} sx={sxStyle}>
          <Grid style={gridStyle}>
            <img src={ChirpLogo} alt='logoImage' />
            <Typography variant='h4' fontWeight='bold'>
              Register An Account
            </Typography>
            <Grid container style={formContainer}>
              <form onSubmit={handleSignup}>
                <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
                  <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                    <InputLabel htmlFor='firstName' style={inputLabelStyle}>First Name</InputLabel>
                    <TextField
                      id='firstName' label='Enter first name' variant='filled' name='fName' onChange={handleInput}
                      value={userInfo.fName} error={!!error.fName} helperText={error.fName} InputProps={{ style: { width: 250 } }}
                    />
                  </Grid>
                  <Grid item style={{ display: 'flex', marginLeft: 50 }}>
                    <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                      <InputLabel htmlFor='lastName' style={inputLabelStyle}>Last Name</InputLabel>
                      <TextField
                        id='lastName' label='Enter last name' variant='filled' name='lName' onChange={handleInput}
                        value={userInfo.lName} error={!!error.lName} helperText={error.lName} InputProps={{ style: { width: 250 } }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <InputLabel htmlFor='username' style={inputLabelStyle}>Username</InputLabel>
                  <TextField
                    id='username' label='Enter username' variant='filled' name='username' onChange={handleInput}
                    value={userInfo.username} error={!!error.username} helperText={error.username} InputProps={{ style: { width: 550 } }}
                  />
                </Grid>
                <Grid>
                  <InputLabel htmlFor='email' style={inputLabelStyle}>Email</InputLabel>
                  <TextField
                    id='email' label='Enter email' variant='filled' name='email' onChange={handleInput}
                    value={userInfo.email} error={!!error.email} helperText={error.email} InputProps={{ style: { width: 550 } }}
                  />
                </Grid>
                <Grid>
                  <InputLabel htmlFor='password' style={inputLabelStyle}>Password</InputLabel>
                  <TextField
                    id='password' type='password' label='Enter password' variant='filled' name='password' onChange={handleInput}
                    value={userInfo.password} error={!!error.password} helperText={error.password} InputProps={{ style: { width: 550 } }}
                  />
                </Grid>
                <Grid>
                  <InputLabel htmlFor='confirmpassword' style={inputLabelStyle}>Confirm Password</InputLabel>
                  <TextField
                    id='confirmpassword' type='password' label='Confirm password' variant='filled' name='confirmPassword' onChange={handleInput}
                    value={userInfo.confirmPassword} error={!!error.confirmPassword} helperText={error.confirmPassword} InputProps={{ style: { width: 550 } }}
                  />
                </Grid>
                <InputLabel style={{ marginTop: 20 }}>
                  <FormControlLabel
                    control={<Checkbox checked={checked} onChange={isChecked} />}
                    label={
                      <Typography>
                        I have read and accept <span style={inputLabelStyle}>Terms and Conditions</span>
                      </Typography>
}
                  />
                </InputLabel>
                <div style={buttonContainer}>
                  <Button style={registerButton} variant='contained' type='submit'>
                    Register
                  </Button>
                </div>
                <div style={{ display: 'flex', marginTop: 10 }}>
                  <Typography variant='body' style={{ marginLeft: '140px' }}>
                    Already have an account?
                  </Typography>
                  <Button variant='text' style={signinButton} href='/login'>Sign in!</Button>
                </div>
              </form>
            </Grid>
            <Grid container style={buttonContainer2}>
              <Divider sx={{ borderBottomWidth: 3, width: '90%' }} />
              <Grid item style={{ marginTop: 15 }}>
                <button className={LoginStyles['gsi-material-button']}>
                  <a href={DEVELOPMENT_API_BASE_URL + '/login/auth/google'}>
                    <div className={LoginStyles['gsi-material-button-state']} />
                    <div className={LoginStyles['gsi-material-button-content-wrapper']}>
                      <div className={LoginStyles['gsi-material-button-icon']}>
                        <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' xmlnsXlink='http://www.w3.org/1999/xlink' style={{ display: 'block' }}>
                          <path fill='#EA4335' d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z' />
                          <path fill='#4285F4' d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z' />
                          <path fill='#FBBC05' d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z' />
                          <path fill='#34A853' d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z' />
                          <path fill='none' d='M0 0h48v48H0z' />
                        </svg>
                      </div>
                      <span className={LoginStyles['gsi-material-button-contents']}>Sign up with Google</span>
                      <span style={{ display: 'none' }}>Sign up with Google</span>
                    </div>
                  </a>
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(SignupPage)
