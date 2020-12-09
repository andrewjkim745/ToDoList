import React, { createContext, useEffect, useState } from 'react'



export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null)

    useEffect(() => {
        // axios sign in method goes here to set current user
        
    }, [currentUser]);


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
