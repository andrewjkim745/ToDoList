import React from 'react'
import { Title } from './Title'


export default function RegisterForm({ registerMsg, onSubmit, onChange, onClick, username, password, confirmP, email}) {
    return (
        <div class='container is-flex is-justify-content-center fadeIn'>
            <div class='column is-two-thirds p-6'>
                <div class='is-flex is-align-items-centered is-justify-content-space-between'>
                    <Title
                        alignment='is-centered'
                        size='2 is-size-6-mobile'
                        color='white'
                        title='Register Account'
                    />
                    <a onClick={onClick} class='delete is-medium'></a>
                </div>
                <input
                    class='input my-3'
                    placeholder='Username'
                    name='username'
                    value={username}
                    onChange={onChange}
                />
                <input class='input mb-3'
                    placeholder='Password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={onChange}
                />
                <input class='input mb-3'
                    placeholder='Confirm password'
                    name='confirmP'
                    type='password'
                    value={confirmP}
                    onChange={onChange}
                />
                <input class='input mb-3'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                />
                <button onClick={onSubmit} class='button materialui has-text-white'>Register</button>
                <p class={registerMsg ? 'title is-size-2 fadeIn has-text-white' : 'displayNone'}>{registerMsg}</p>
                
            </div>
        </div>
    )
}