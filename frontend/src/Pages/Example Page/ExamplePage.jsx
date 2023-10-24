import ExampleStyles from './Example.module.css';
import apiClient from '../../Services/apiClient';
import { useState } from 'react';

export default function ExamplePage() {
  const [message, setMessage] = useState('');
  
  const fetchExampleMessage = async () => {
    const { data, error} = await apiClient.healthCheck();
    if(data){
      console.log(data);
    }
    if(error){
      console.log(error);
    }
  };

  return (
    <div className={ExampleStyles.Example}>
      <h2>HELLO WORLD, THIS IS THE EXAMPLE PAGE</h2>
      <button onClick={fetchExampleMessage}> Click this button to show message</button>
      {message && <p>This is my message: { message }</p>}
    </div>
  );
};