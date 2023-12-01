import LoginStyles from './Login.module.css'
// import apiClient from '../../Services/apiClient'
import { useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import ChirpLogo from '../../Images/ChirpLogo.svg'
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
    else if(username === "" && password !== "") {
      setError('missing username')
    } 
    else if(username !== "" && password === "") {
      setError('missing password')
    } 
    else if(username === "" && password === "") {
      setError('missing username and password')
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
              <button className={LoginStyles["gsi-material-button"]}>
                <a href="https://www.google.com">
                  <div className={LoginStyles["gsi-material-button-state"]}></div>
                  <div className={LoginStyles["gsi-material-button-content-wrapper"]}>
                    <div className={LoginStyles["gsi-material-button-icon"]}>
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: "block"}}>
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </svg>
                    </div>
                    <span className={LoginStyles["gsi-material-button-contents"]}>Sign in with Google</span>
                    <span style={{display: "none"}}>Sign in with Google</span>
                  </div>
                </a>
              </button>
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