import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
// import { AuthContext } from '../contexts/AuthContext'
import  SignIn  from '../screens/SignIn'
import   Home  from '../screens/Home'




export const Routes = ({ setUser, user }) => {
    return (
        // <Switch>
        <>
            <Route
            exact path='/'
            render={props => <SignIn {...props} setUser={setUser} />}
            />
            <Route
            exact path='/home'
            render={props => <Home {...props} user={user}/>}
            />
        {/* </Switch> */}
        </>
    )
}