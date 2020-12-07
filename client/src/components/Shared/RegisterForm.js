import React, { useState } from 'react' 
import { Title } from './Title'


export default function RegisterForm() {
    return (
        <div class='container is-flex is-justify-content-center'>
            <div class='column is-two-thirds p-6'>
                <Title
                size='1 is-size-5-mobile'
                color='white'
                title='Register Account'
                />
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