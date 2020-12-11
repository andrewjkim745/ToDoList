import React, { useState } from 'react' 
import  CreateModal from './CreateModal'
import UpdateModal from './UpdateModal'
import Title from '../Shared/Title'



export default function Todos({ updateSubmit, updateModalClose, onSubmit, todo, onChange, className }) {



    const [ createModal, setCreateModal ] = useState(false)
    

    
    return (
        <>
        <button class='button' onClick={()=> setCreateModal(true)}>Create a Todo</button>
        <CreateModal
        className={createModal ? 'modal is-active' : 'displayNone'}
        onClick={()=> setCreateModal(false)}
        todo={todo}
        onSubmit={onSubmit}
        onChange={onChange}
        />
        </>
    )
}