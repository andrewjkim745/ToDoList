import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
// import { AuthContext } from '../contexts/AuthContext'
import  SignIn  from '../screens/SignIn'
import  HomeContainer  from '../screens/HomeContainer'
import UpdateForm from '../Shared/UpdateForm'



export const Routes = ({ setUser, user, clearUser, landingToggle, todoToggle,  }) => {
    return (
        // <Switch>
        <>
            <Route
            exact path='/'
            render={props => <SignIn {...props} setUser={setUser} />}
            />
            <Route
            exact path='/home'
            render={props => <HomeContainer {...props} landingToggle={landingToggle} todoToggle={todoToggle} user={user} clearUser={clearUser}  />}
            />
            <Route
            exact path='/todos/:id'
            component={UpdateForm}
            />
        {/* </Switch> */}
        </>
    )
}