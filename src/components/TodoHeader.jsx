import React, { useState } from 'react'

const TodoHeader = ({ input, setInput, handleSubmit, isEditing }) => {

    return (
        <div className='h-screen flex items-center justify-center'>
            <form action="" onSubmit={handleSubmit}>
                <h1>TODO</h1>
                <input type="text"
                    placeholder="Enter your task"
                    className='border rounded p-2'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button type='submit' className='border rounded p-2'>{isEditing ? 'Edit' : 'Add'}</button>
            </form>
        </div>
    )
}

export default TodoHeader