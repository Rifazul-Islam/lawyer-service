
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
  
export const AuthProvider = createContext();
const auth = getAuth(app);

 const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({children}) => {
  
       const [user, setUser] = useState({})

       const handlarSignup = (email, password) =>{

              return  createUserWithEmailAndPassword(auth,email,password)
       }

       const  UserProfile = (profile) =>{

              return updateProfile(auth.currentUser, profile)
       }

       const UserLogin = (email, password)=>{

            return signInWithEmailAndPassword(auth, email, password)
       }

         
         const handlarGoogle = () =>{

              return signInWithPopup(auth, googleProvider)
         }
         
       const ligninOut = ()=>{

           return signOut(auth)
       }

         useEffect( ()=>{

               const unSubribe = onAuthStateChanged(auth , (remaingUser)=>{

                     setUser(remaingUser)
               })

               return ()=> unSubribe()
         },[])

         const authInfo = {
            user,
            handlarSignup,
            UserProfile,
            UserLogin,
            handlarGoogle,
            ligninOut
          }

    return (
       <AuthProvider.Provider value={authInfo}>
            {children}
       </AuthProvider.Provider>
    );
};

export default ContextProvider;