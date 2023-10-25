import ExampleStyles from './Example.module.css';
import apiClient from '../../Services/apiClient';
import { useState, memo } from 'react';

function ExamplePage() {
  const [message, setMessage] = useState('');
  
  //FUNCTION : When the button is clicked, send a call to the backend to get a message from backend health check
  const fetchExampleMessage = async () => {
    const { data, error} = await apiClient.healthCheck(); //Use api client to call the endpoint I want
    if(data){ //If I get data back (successful request)
      setMessage(data) //Place functionality here
    }
    if(error){ //If I get an error instead from the backend (unsuccessful request)
      console.log(error); //Print my error
    }
  };

  return (
    <div className={ExampleStyles['example-page']}> {/**Example on how to attach your css styling to these components */}
      <h2>HELLO WORLD, THIS IS THE EXAMPLE PAGE</h2>
      <button onClick={fetchExampleMessage}> Click this button to show message</button>
      {message && <p>This is my message: { message }</p>}
    </div>
  );
};

//Explanation : Only apply the memo command when exporting your component if you are using variables that will constantly refresh or change such as useStates etc.
export default memo(ExamplePage);