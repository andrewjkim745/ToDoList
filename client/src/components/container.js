import React from 'react'
import { Routes } from './routes/index'




export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            toDos: [],
            landingDisplay: true,
            todoDisplay: false
        }
    }


    setUser = user => this.setState({ user })

    clearUser = () => this.setState({ user: null })

    toggleLanding = () => {
        this.setState({
            landingDisplay: true,
            todoDisplay: false
        })
    }

    toggleToDo = () => {
        this.setState({
            todoDisplay: true,
            landingDisplay: false
        })
    }



    render() {

        const { user, toDos } = this.state
        return (

        
        <>
        <Routes
        setUser={this.setUser}
        user={user}
        clearUser={this.clearUser}
        />
        </>
        )
    }
}