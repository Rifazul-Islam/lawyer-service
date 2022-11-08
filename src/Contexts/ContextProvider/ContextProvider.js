
import {getAuth} from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
  
export const AuthProvider = createContext()
const auth = getAuth(app)

const ContextProvider = ({children}) => {
  
       const [user, setUser] = useState({})

         

         const authInfo = { }

    return (
       <AuthProvider.Provider value={authInfo}>
            {children}
       </AuthProvider.Provider>
    );
};

export default ContextProvider;