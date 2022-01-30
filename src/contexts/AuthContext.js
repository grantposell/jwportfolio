import React, { useContext, useEffect, useState } from "react";
import { projectAuth } from '../firebase/config';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {
    const { currentUser, setCurrentUser } = useState();

    function signup(email, password) {
        return projectAuth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return projectAuth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        return projectAuth.signOut()
    }

    function resetPassword(email) {
        return projectAuth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = projectAuth.onAuthStateChange(user => {
            setCurrentUser(user)
            // setLoading(false)
        })

        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}