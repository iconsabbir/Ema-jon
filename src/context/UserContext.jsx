import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

import app from '../firebase/firebase.init';


    export const AuthContext = createContext()

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
const UserContext = ({children}) => { 

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

   const authInfo = {
        createUser,
        googleSignIn,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext; 