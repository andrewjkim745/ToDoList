import React, { useState } from 'react'
import { Title } from './Title'


export default function RegisterForm({ onClick}) {
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
                />
                <input class='input mb-3'
                    placeholder='PASSWORD'
                />
                <input class='input mb-3'
                    placeholder='CONFIRM PASSWORD'
                />
                <input class='input mb-3'
                    placeholder='EMAIL ADDRESS'
                />
                <button class='button is-white has-text-primary'>Register</button>
            </div>
        </div>
    )
}