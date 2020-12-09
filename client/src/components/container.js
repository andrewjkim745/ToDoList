import React from 'react'
import { Routes } from './routes/index'




export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            toDos: []
        }
    }


    setUser = user => this.setState({ user })



    render() {

        const { user, toDos } = this.state
        return (

        
        <>
        <Routes
        setUser={this.setUser}
        user={user}
        />
        </>
        )
    }
}