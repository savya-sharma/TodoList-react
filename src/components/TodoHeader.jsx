import React, { useState } from 'react'

const TodoHeader = ({ input, setInput, handleSubmit, isEditing }) => {

    return (
        <div className="flex items-center justify-center">
            <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md'>
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-2 tracking-wider">TODO</h1>
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="gap-2 flex items-center"
                >
                    <input
                        type="text"
                        placeholder="Enter your task"
                        className="border ml-4 border-gray-300 rounded px-4 py-2 w-full"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <button
                        type="submit"
                        className={`border text-gray-100 border-gray-100 bg-gradient-to-r from-[#206858] via-[#09241B] to-[#123C2E] hover:from-[#123C2E]  hover:to-[#09241B] transition  rounded px-4 py-2 cursor-pointer hover:bg-gray-900 transition w-full font-semibold ${isEditing ? 'bg-black hover:bg-black border-gray-700' : ''}`}
                    >
                        {isEditing ? 'Edit' : 'Add'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TodoHeader