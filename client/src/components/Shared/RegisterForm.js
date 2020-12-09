import React, { useState } from 'react'
import { Title } from './Title'


export default function RegisterForm({ registerMsg, onSubmit, onChange, confirmPChange, usernameChange, passwordChange, emailChange, onClick, username, password, confirmP, email}) {
    return (
        <div class='container is-flex is-justify-content-center fadeIn'>
            <div class='column is-two-thirds p-6'>
                <div class='is-flex is-justify-content-space-between'>
                    <Title
                        size='1 is-size-5-mobile'
                        color='white'
                        title='Register Account'
                    />
                    <a onClick={onClick} class='delete'></a>
                </div>
                <input
                    class='input my-3'
                    placeholder='USERNAME'
                    name='loginUsername'
                    value={username}
                    onChange={onChange}
                />
                <input class='input mb-3'
                    placeholder='PASSWORD'
                    name='loginPassword'
                    value={password}
                    onChange={onChange}
                />
                <input class='input mb-3'
                    placeholder='CONFIRM PASSWORD'
                    name='confirmP'
                    value={confirmP}
                    onChange={onChange}
                />
                <input class='input mb-3'
                    placeholder='EMAIL ADDRESS'
                    name='email'
                    value={email}
                    onChange={onChange}
                />
                <button onClick={onSubmit} class='button is-white has-text-primary'>Register</button>
                <p class={registerMsg ? 'title is-size-2' : 'displayNone'}>{registerMsg}</p>
                <p class={registerMsg ? 'subtitle is size-4' : 'displayNone'}> stay or <a href='/home'>redirect to home? </a></p>
            </div>
        </div>
    )
}