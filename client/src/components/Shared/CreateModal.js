import React from 'react'
import { Title } from '../Shared/Title'





export default function CreateModal({ onSubmit, onClick, className, onChange, todo }) {
    return (
        <div class={className}>
            <div class="modal-background" onClick={onClick}></div>
            <div class="modal-content">
                <div class='box'>
                    <div class='container has-text-centered'>
                        <Title
                            title='Create a ToDo'
                            size='2'
                        />
                        <input
                            class='input my-3'
                            placeholder='Title goes here'
                            name='title'
                            value={todo.title}
                            onChange={onChange}
                        />
                        <input class='input mb-3'
                            placeholder='task description'
                            name='task'
                            value={todo.task}
                            onChange={onChange}
                        />
                        <button onClick={onSubmit} class='button'>Submit</button>
                    </div>
                </div>
                </div>
                <button onClick={onClick} class="modal-close is-large" aria-label="close"></button>
            </div>
    )
}