import React from 'react'
import { MdDeleteForever, MdEdit } from "react-icons/md";

const ToList = ({ tasks, handleDelete, handleEdit }) => {
    return (
        <div>
            <ul>
                {tasks.map((obj) => {
                    return <li className='border p-2 flex' key={obj.id}>{obj.task}
                        <MdEdit onClick={() => handleEdit(obj.id)} />
                        <MdDeleteForever onClick={() => handleDelete(obj.id)} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ToList
