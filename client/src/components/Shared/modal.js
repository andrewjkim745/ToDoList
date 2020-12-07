import React from 'react'






export const Modal = ({ className, onClick }) => {
    return (
        <div className={className}>
            <div class="modal-background"></div>
            <div class="modal-content">
                <p></p>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
    )
}