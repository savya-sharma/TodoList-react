import React from 'react'
import { MdDeleteForever, MdEdit } from "react-icons/md";

const ToList = ({ tasks, handleDelete, handleEdit }) => {

    return (
        <div className="flex justify-center mt-6">
            <ul className="w-full max-w-md space-y-3">
                {tasks.map((obj) => {
                    return (
                        <li
                            className="bg-white text-black flex items-center px-4 py-3 rounded-lg shadow group transition hover:bg-gray-200"
                            key={obj.id}
                        >
                            <span className="font-medium text-lg">{obj.task}</span>
                            <input
                                type="checkbox"
                                className="ml-auto accent-green-500 w-5 h-5 cursor-pointer"
                            />
                            <button
                                className="ml-4 p-1 rounded hover:bg-black hover:text-gray-300 cursor-pointer transition"
                                onClick={() => handleEdit(obj.id)}
                                title="Edit"
                            >
                                <MdEdit size={22} />
                            </button>
                            <button
                                className="ml-2 p-1 rounded hover:bg-black hover:text-gray-300 cursor-pointer transition"
                                onClick={() => handleDelete(obj.id)}
                                title="Delete"
                            >
                                <MdDeleteForever size={24} />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ToList