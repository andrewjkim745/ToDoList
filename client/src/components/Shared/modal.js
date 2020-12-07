import React from 'react'
import  RegisterForm  from './RegisterForm'





export const Modal = ({ className, onClick }) => {
    return (
        <div className={className}>
            <div onClick={onClick} class="modal-background"></div>
            <div class='background is-primary side-drawer'>
               {/* <button onClick={onClick} class="modal-close is-large" aria-label="close"></button> */}
                {/* <p>hi there</p> */}
                <RegisterForm/>
            </div>
   
        </div>
    )
}