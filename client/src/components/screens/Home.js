import React from 'react'
import  { Navbar }  from '../Shared/Navbar'



export const Home = ({ user, clearUser }) => {
    return (
        <>
        <Navbar
        user={user}
        clearUser={clearUser}
        />
        </>
    )
}