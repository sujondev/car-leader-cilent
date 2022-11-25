import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const Authcontext = createContext()
const auth = getAuth(app)
const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        return signOut(auth)
    }

    const userUpdateProfile = (name) => {
        return updateProfile(auth.currentUser, name)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
        })
        return () => unsubcribe()
    }, [])


    const userInfo = { createuser, signIn, logout, user, googleSignIn }
    return (
        <Authcontext.Provider value={userInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;