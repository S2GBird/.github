import ExampleStyles from './Example.module.css'
import apiClient from '../../Services/apiClient'
import { useAuthContext } from '../../Services/authProvider'
import { useState, memo } from 'react'
import ViewAllCommentsPopup from '../../Components/Comments/ViewAllCommentsPopup'

function ExamplePage () {
  const [message, setMessage] = useState('')
  const { user, setUser, globalError, setGlobalError } = useAuthContext() // example of how to use Auth Context Provider

  // FUNCTION : When the button is clicked, send a call to the backend to get a message from backend health check
  const fetchExampleMessage = async () => {
    const { data, error } = await apiClient.healthCheck() // Use api client to call the endpoint I want
    if (data) { // If I get data back (successful request)
      setMessage(data) // Place functionality here
    }
    if (error) { // If I get an error instead from the backend (unsuccessful request)
      console.log(error) // Print my error
    }
  }

  return (
    <div>
      <div className={ExampleStyles['example-page']}> {/** Example on how to attach your css styling to these components */}
        <h2>HELLO WORLD, THIS IS THE EXAMPLE PAGE</h2>
        <button onClick={fetchExampleMessage}> Click this button to show message</button>
        {message && <p>This is my message: {message}</p>}
      </div>
      <ViewAllCommentsPopup />
    </div>
  )
};

// Explanation : Only apply the memo command when exporting your component if you are using variables that will constantly refresh or change such as useStates etc.
export default memo(ExamplePage)
