import React from 'react'
import { MdDeleteForever, MdEdit } from "react-icons/md";

const ToList = ({ tasks, handleDelete, handleEdit, handleComplection }) => {

    return (
        <div>
            <ul>
                {tasks.map((obj) => {
                    return <li className='border p-2 flex' key={obj.id}>{obj.task}
                        <input onClick={() => handleComplection} type="checkbox" className='ml-auto' />
                        <MdEdit onClick={() => handleEdit(obj.id)} />
                        <MdDeleteForever onClick={() => handleDelete(obj.id)} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ToList