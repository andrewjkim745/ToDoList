import React, { useState } from 'react'
import { Title } from '../Shared/Title'
import { TextField, Button } from '@material-ui/core'




export default function Login() {


    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ error, setError ] = useState(true)


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
                        <div class='column is-half'>
                            <div class='is-flex is-flex-direction-column'>
                                <Title
                                    title='Account Login'
                                    color='primary'
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
                                    value={password}
                                    onChange={passwordChange}
                                />
                                {/* <Button
                                color='primary'
                                variant='contained'
                                size='large'
                                >
                                Login
                                </Button> */}
                                <button class='button is-primary'>Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}