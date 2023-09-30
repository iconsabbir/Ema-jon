import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser, signOut } from "firebase/auth";

import app from '../firebase/firebase.init';


    export const AuthContext = createContext()

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
const UserContext = ({children}) => { 
    const [user,setUser] = useState(null)
    const [loding,setLoding] = useState(true)

    const createUser = (email, password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn =()=>{
        setLoding(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoding(false)
        } )
        return ()=>{
            unsubscribe()
        }
    },[])

   const authInfo = {
        createUser,
        googleSignIn,
        signIn,
        logOut,
        loding,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext; 