import React, { useState, useEffect } from 'react'
import { Title } from '../Shared/Title'
import { TextField } from '@material-ui/core'




export default function Login() {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(true)


    const usernameChange = (e) => {
        setUsername(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div class='hero is-fullheight is-primary'>
            <div class='hero-body'>
                <div class='container is-large has-text-centered'>
                    <div class='box is-flex is-justify-content-center'>
                        <div class='column is-half my-6'>
                            <div class='is-flex is-flex-direction-column'>
                                <Title
                                    title='Account Login'
                                    color='primary'
                                    transformation='my-6'
                                />
                                <TextField
                                    id='outlined-basic'
                                    label='Username'
                                    variant='outlined'
                                    margin='normal'
                                    value={username}
                                    onChange={usernameChange}
                                />
                                <TextField
                                    id='outlined-basic'
                                    label='Password'
                                    variant='outlined'
                                    margin='normal'
                                    color='primary'
                                    value={password}
                                    onChange={passwordChange}
                                />
                                <div class='is-flex is-justify-content-space-between is-align-items-center'>
                                    <label class="checkbox">
                                        <input class='mr-1'type="checkbox"/>
                                        Remember me
                                    </label>
                                    <p class='has-text-primary is-size-5'>Forgot Password?</p>
                                </div>
                                <button class='button is-primary my-6'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}