import LoginStyles from './Login.module.css'
// import apiClient from '../../Services/apiClient'
import { useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import ChirpLogo from '../../Images/ChirpLogo.svg'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TextField, Button} from '@mui/material';

function LoginPage () {
//   const [message, setMessage] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()
    setError("")
    // check to see if both email and password were entered
      // return error message if either were missing
    if(username !== "" && password !== "") {
      // check if email and password are valid w/ db
      // if valid redirect to dashboard
      // return error message if incorrect email or password
      // const user = {
      //   username: username,
      //   password: password
      // } // send to backend
      if(1) { 
        // console.log(email, password)
        // console.log("redirect to dashboard")
        navigate('/dashboard')
      }
      else {
        setError('incorrect username or password')
      } 
    }
    else {
      setError('missing username or password')
    } 
  }

//   // FUNCTION : When the login button is clicked, send a call to the backend to verify the information is correct
  // const login = async () => {
  //   const { data, error } = await apiClient.login() // Use api client to call the endpoint I want
  //   if (data) { // If I get data back (successful request)
  //     // redirect to dashboard
  //   }
  //   if (error) { // If I get an error instead from the backend (unsuccessful request)
  //     console.log(error) // Print my error
  //     // display error message to page
  //     // ex: there is no account with this email
  //     // ex: incorrect password
  //   }
  // }

  return (
    <div className={LoginStyles['login-page']}> {/** Example on how to attach your css styling to these components */}
      <div className={LoginStyles['login-header']}>
        <div className={LoginStyles['login-header-name']}>
          <img className={LoginStyles['login-logo']} src={ChirpLogo} alt='logo'/>
          <div>Chirp</div>
        </div>
        <ul className={LoginStyles['login-header-info']}>
          <li><a href='/about'>About</a></li>
          <li><a href='/login'>Login</a></li>
          <li><a href='/signup'>Sign Up</a></li>
        </ul>
      </div>
      <div className={LoginStyles['login-body-container']}>
        <div className={LoginStyles['login-body']}>
            <div className={LoginStyles['login-pic-container']}></div>
          <div>
            <form className={LoginStyles['login-form']} onSubmit={handleLogin}>
              <img src={ChirpLogo} alt='logo'/>
              <TextField style={{width: "75%", height:"15%"}} id="filled-basic username" label="Username" variant="filled" value={username} onChange={(event) => setUsername(event.target.value)}/>
              <TextField style={{width: "75%", height:"15%"}} id="filled-basic pwd" label="Password" type='password' variant="filled" value={password} onChange={(event) => setPassword(event.target.value)}/>
              <Button variant="contained" type='submit' style={{backgroundColor: "#1B7D4F", width: "75%", height:"30%"}}>Login</Button>
            </form>
            <p className={LoginStyles['login-error']}>{error}</p>
            <div className={LoginStyles['login-social-media']}>
              <a href='https://www.google.com'><GoogleIcon color="primary"/></a>
              <a href='https://www.instagram.com'><InstagramIcon color="primary"/></a>
              <a href='https://www.linkedin.com'><LinkedInIcon color="primary"/></a>
              <a href='https://www.facebook.com'><FacebookIcon color="primary"/></a>
            </div>
            <a href='/#'>Forgot Password?</a>
          </div>
        </div>
      </div>
      <div className={LoginStyles['login-footer']}>Chirp</div>
    </div>
  )
};

// Explanation : Only apply the memo command when exporting your component if you are using variables that will constantly refresh or change such as useStates etc.
export default memo(LoginPage)