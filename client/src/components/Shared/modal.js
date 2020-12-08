import React from 'react'
import  RegisterForm  from './RegisterForm'





export const Modal = ({ className, onClick }) => {

    return (
        <div className={className}>
            <div onClick={onClick} class="modal-background"></div>
            <div class='background is-primary side-drawer'>
                <RegisterForm
                onClick={onClick}
                />
            </div>
   
        </div>
    )
}