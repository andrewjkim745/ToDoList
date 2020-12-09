import React, { useState, useEffect } from 'react'
import { Title } from '../Shared/Title'
import { TextField } from '@material-ui/core'
import { Modal } from '../Shared/Modal'




export default function Login() {

    const [loginuser, setLoginUser ] = useState('')
    const [loginpassword, setLoginPassword ] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmP, setConfirmP ] = useState('')
    const [email, setEmail] = useState('')
    const [modal, openModal ] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [hidden, setHidden ] = useState(true)
    

    const loginuserChange = (e) => {
        setLoginUser(e.target.value)
    }
    const loginpasswordChange = (e) => {
        setLoginPassword(e.target.value)
    }
    const usernameChange = (e) => {
        setUsername(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const confirmPasswordChange = (e) => {
        setConfirmP(e.target.value)
    }


    const modalRender = () => {
        return <Modal
            className={modal ? 'modal is-active' : 'displayNone'}
            onClick={() => openModal(false)}
            username={username}
            email={email}
            password={password}
            confirmP={confirmP}
            usernameChange={usernameChange}
            passwordChange={passwordChange}
            confirmPChange={confirmPasswordChange}
            emailChange={emailChange}
        />
    }

    return (
        <div class='hero is-fullheight gradient'>
            <div class='hero-body'>
                <div class='container boxshadow has-background-white is-large has-text-centered'>
                    <div class='is-flex is-justify-content-space-between'>                
                        <div class='pad6 loginW is-flex is-flex-direction-column'>
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
                                value={loginuser}
                                onChange={loginuserChange}
                            />
                            <TextField
                                id='outlined-basic'
                                label='Password'
                                variant='outlined'
                                margin='normal'
                                color='primary'
                                type={hidden ? 'password' : 'text'}
                                value={loginpassword}
                                onChange={loginpasswordChange}
                            />
                            <div class='is-flex is-justify-content-space-between is-align-items-center'>
                                <label class="checkbox">
                                    <input class='mr-1 is-size-5' type="checkbox" onClick={() => setHidden(!hidden)} />
                                        Show Password
                                    </label>
                                <a class='has-text-primary is-size-5 is-size-6-mobile'>Forgot Password?</a>
                            </div>
                            <button onClick={class='button is-primary my-6'>Login</button>
                        </div>
                        {modalRender()}
                        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={()=> openModal(true)} class={hovered ? 'has-background-primary sideW pointer' : 'has-background-primary sideW'}>
                            <p style={{ color: 'lightgrey' }} class={hovered ? 'fadeOut mt-6 is-size-1 is-size-5-mobile' : 'mt-6 is-size-1 is-size-5-mobile'}>||</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}