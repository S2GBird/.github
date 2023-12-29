import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './NotFound.css';
import Chirp404Image from '../../Images/Chirp404.png'

export default function NotFound() {

    /* Components of Diagnostic */
    const initialDiagnostics = [
    ];
    const [diagnostics, setDiagnostics] = useState(initialDiagnostics);

    const runDiagnostics = () => {
        
        const newDiagnostics = [
            "The URL may be mistyped.",
            "There could be a network issue.",
            "Contact support for further assistance."
        ];

        setDiagnostics(newDiagnostics);
    };

    return (
        /* 404 Page */
        <div className="NotFound">

            {/* Content */}
            <img src={Chirp404Image} alt="404 Not Found" className="custom-image" />
            <h1>404</h1>
            <h2>Oops! Sorry, the page you're looking for doesn't exist.</h2>

            {/* Buttons */}
            <div className="button-container"> 
                <Link to="http://localhost:3000/dashboard"><button className="custom-button">Back to Home</button></Link>
                <button onClick={runDiagnostics} className="custom-button">Run Diagnostics</button>
            </div>

            {/* Diagnostic */}
            <div className="diagnostics">
                <ul>
                    {diagnostics.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>
        </div>
    );
}