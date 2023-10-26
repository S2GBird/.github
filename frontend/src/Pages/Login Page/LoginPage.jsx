import LoginStyles from './Login.module.css'
// import apiClient from '../../Services/apiClient'
// import { useState, memo } from 'react'

function LoginPage () {
//   const [message, setMessage] = useState('')

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
        <div>Logo</div>
        <div>Name</div>
        <div>About</div>
        <div>Login</div>
        <div>Sign Up</div>
      </div>
      <div className={LoginStyles['login-body']}>
        <div>Picture</div>
        <div>Login Form</div>
      </div>
      {/* <button onClick={fetchExampleMessage}> Click this button to show message</button>
      {message && <p>This is my message: {message}</p>} */}
      <div className={LoginStyles['login-footer']}>Footer</div>
    </div>
  )
};

// Explanation : Only apply the memo command when exporting your component if you are using variables that will constantly refresh or change such as useStates etc.
export default LoginPage