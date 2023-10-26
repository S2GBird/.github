import LoginStyles from './Login.module.css'
// import apiClient from '../../Services/apiClient'
import { useState, memo } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage () {
//   const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [valid, setValid] = useState(0) 
  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()
    setError('')
    setValid(1) // temporary should be set after checking with db
    // check to see if both email and password were entered
      // return error message if either were missing
    if(email !== "" && password !== "") {
      // check if email and password are valid w/ db
      // if valid redirect to dashboard
      // return error message if incorrect email or password
      if(valid) { 
        // console.log(email, password)
        // console.log("redirect to dashboard")
        navigate('/dashboard')
      }
      else {
        setError('incorrect email or password')
      } 
    }
    else {
      setError('missing email or password')
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
          {/* <div>Logo</div> */}
          <div className={LoginStyles['login-logo']}>Logo</div>
          <div>Chirp</div>
        </div>
        <ul className={LoginStyles['login-header-info']}>
          <li><a href='/#'>About</a></li>
          <li><a href='/login'>Login</a></li>
          <li><a href='/#'>Sign Up</a></li>
        </ul>
      </div>
      <div className={LoginStyles['login-body-container']}>
        <div className={LoginStyles['login-body']}>
          <div>Picture</div>
          <div className={LoginStyles['login-form-container']}>
            <form className={LoginStyles['login-form']} onSubmit={handleLogin}>
              <div>Logo</div>
              <input type='text' value={email} onChange={(event) => setEmail(event.target.value)}></input>
              <label>Email</label>
              <input type='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
              <label>Password</label>
              <button>Login</button>
            </form>
            <p className={LoginStyles['login-error']}>{error}</p>
            <p>static social media buttons (will add icons later)</p>
            <div className={LoginStyles['login-social-media']}>
              <button><a href='https://www.google.com'>Google</a></button>
              <button><a href='https://www.instagram.com'>Instagram</a></button>
              <button><a href='https://www.linkedin.com'>LinkedIn</a></button>
              <button><a href='https://www.facebook.com'>Facebook</a></button>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={fetchExampleMessage}> Click this button to show message</button>
      {message && <p>This is my message: {message}</p>} */}
      <div className={LoginStyles['login-footer']}>Footer</div>
    </div>
  )
};

// Explanation : Only apply the memo command when exporting your component if you are using variables that will constantly refresh or change such as useStates etc.
export default memo(LoginPage)