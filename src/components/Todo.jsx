import { useState } from 'react'
import TodoHeader from './TodoHeader'
import ToList from './ToList'

const Todo = () => {
    const [input, setInput] = useState("")
    const [tasks, setTask] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [completed, setCompleted] = useState(false)

    function handleComplection(idToComplete) {
        setCompleted(!completed)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isEditing) {
            setTask(
                tasks.map((obj) => {
                    return obj.id === editId ? { ...obj, task: input } : obj
                })
            )
            setIsEditing(false)
            setEditId(null)
            setInput("")
        }
        else {
            if (!input.trim()) {
                setInput('');
                return;
            }
            setTask([...tasks, { id: Date.now(), task: input }]);
            setInput('');
        }
    }


    function handleDelete(obj) {
        setTask(tasks.filter((task) => task.id !== obj))
    }


    function handleEdit(idToEdit) {
        setIsEditing(true)
        setEditId(idToEdit)
        const objectToEdit = tasks.find((task) => {
            return task.id === idToEdit;
        })
        setInput(objectToEdit.task)
    }

    
    return (
        <div className='w-full h-screen'>
            <TodoHeader input={input}
                setInput={setInput}
                handleSubmit={handleSubmit}
                isEditing={isEditing}
            />
            <ToList
                tasks={tasks}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleComplection={handleComplection}
            />
        </div>
    )
}

export default Todo
