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


    const renderModal = () => {
        return (
            <div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <p>hi</p>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
        )
    }




    return (
        <div class='hero is-fullheight gradient'>
            <div class='hero-body'>
                <div class='container boxshadow has-background-white is-large has-text-centered'>
                        {/* <div class='column'> */}
                            <div class='is-flex is-justify-content-space-between'>
                            <div class='pad6 ninetyW is-flex is-flex-direction-column'>
                                <Title
                                    title='Account Login'
                                    color='primary'
                                    size='1 is-size-5-mobile'
                                    className='my-6'
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
                                        <input class='mr-1 is-size-5'type="checkbox"/>
                                        Remember me
                                    </label>
                                    <a class='has-text-primary is-size-5 is-size-6-mobile'>Forgot Password?</a>
                                </div>
                                <button class='button is-primary my-6'>Login</button>
                                </div>
                            <div class='has-background-primary tenW'>
                                <p style={{ color: 'lightgrey'}} class='mt-6 is-size-1 is-size-5-mobile'>||</p>
                            </div>
                            </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}