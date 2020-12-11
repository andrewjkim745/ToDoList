import React from 'react'
import  { Navbar }  from '../Shared/Navbar'
import { SideList } from '../Shared/SideList'
import { Landing } from '../Shared/Landing'



export const Home = ({ user, clearUser, onClick }) => {
    return (
        <>
        <div class='is-flex'>
        <SideList
        onClick={onClick}
        />
        <Landing/>
        </div>
        
        </>
    )
}