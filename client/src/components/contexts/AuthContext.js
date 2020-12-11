import React, { createContext, useEffect, useState } from 'react'



export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null)

    useEffect(() => {
        // axios sign in method goes here to set current user
        // let loginUser = window.localStorage.setIstem("jwt", res.jwt);


        let currentToken = localStorage.getItem('token')
        let currentUser = localStorage.getItem('user')
        console.log(currentToken)
        console.log(JSON.stringify(currentUser))
    
    }, []);


    return (
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
