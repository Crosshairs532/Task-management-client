/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../Firebase/firebase.config'
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            console.log(currentUser, "User Loggin in");
        })
        return () => Unsubscribe();
    }, [])

    const authInfo = { signIn, CreateUser, user, isLoading, signInGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>

    );
};

export default AuthProvider;