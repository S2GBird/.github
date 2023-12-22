import { createContext, useContext, useState } from 'react';
import apiClient from './apiClient';
const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [globalError, setGlobalError] = useState('');

    const logoutUser = async () => {
        //SET FUNCTIONALITY FOR LOGGING OUT THE USER
    };

    const authContextValues = {
        user, setUser, globalError, setGlobalError, logoutUser
    };

    return(
        <AuthContext.Provider value={authContextValues}>
            <>{children}</>
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);