import React from 'react'






export const Modal = ({ className, onClick }) => {
    return (
        <div className={className}>
            <div onClick={onClick} class="modal-background"></div>
            {/* <div class="modal-content"> */}
            <div class='background is-white side-drawer'>
               <button onClick={onClick} class="modal-close is-large" aria-label="close"></button>
                <p>hi there</p>
                </div>
            {/* </div> */}
        </div>
    )
}