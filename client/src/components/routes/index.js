import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { Login } from '../screens/Login'





export const Routes = () => {
    return (
        <Switch>
            <Route
            exact path='/login'
            render={Login}
            />
        </Switch>
    )
}