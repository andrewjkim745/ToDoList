import React from 'react'
import  RegisterForm  from './RegisterForm'





export const Modal = ({ registerMsg, onSubmit,onChange,  className, onClick, username, password, confirmP, email  }) => {

    return (
        <div className={className}>
            <div onClick={onClick} class="modal-background"></div>
            <div class=' materialui side-drawer'>
                <RegisterForm
                onClick={onClick}
                username={username}
                email={email}
                password={password}
                confirmP={confirmP}
                onChange={onChange}
                onSubmit={onSubmit}
                registerMsg={registerMsg}
                />
            </div>
        </div>
    )
}