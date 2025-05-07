import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

/*
"use client"
import React, {useState} from 'react'

const page = () => {

    const [todoObject, setTodoObject] = useState({
        title : "",
        description: "",
        completed: false,
    })

    const handleInputChange = (event) => {
        if (event.target.name === "completed"){
            setTodoObject({
                ...todoObject,
                [event.target.name]: event.target.checked,
            })
            return
        }

        const {name, value} = event.target
        setTodoObject({
            ...todoObject,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const localStorageTodos = localStorage.getItem("todos")
        if(!todoObject.title || !todoObject.description){
            alert("Please fill out all fields")
            return
        }

        const todoWithId = {
            ...todoObject,
            id: Date.now().toString()
        }

        if(localStorageTodos){
            localStorage.setItem("todos", JSON.stringify([
                ...JSON.parse(localStorageTodos),
                todoWithId
            ]))
        } else {
            localStorage.setItem("todos", JSON.stringify([todoWithId]))
        }
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-900'>Add a todo</h1>
            <form onSubmit={handleSubmit}>
                <div className='md:flex mb-6'>
                    <div className='md:w-1/3'>
                        <label className='text-gray-500 font-bold pr-4'>
                            Todo
                        </label>
                    </div>
                    <div className='md:w-2/3'>
                        <input name='title' placeholder='todo title' onChange={handleInputChange} className='bg-gray-200 border-2 border-gray-200' />
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className='md:w-1/3'>
                        <label className='text-gray-500 font-bold pr-4'>
                            Description
                        </label>
                    </div>
                    <div className='md:w-2/3'>
                        <input name='description' placeholder='todo description' onChange={handleInputChange} className='bg-gray-200 border-2 border-gray-200' />
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className='md:w-2/3'>
                        <label className='text-sm'>Completed</label>
                        <input name="completed" placeholder='todo completed' onChange={handleInputChange} type="checkbox" className='bg-gray-200 border-2 border-gray-200 ml-1'/>
                    </div>
                </div>
                <button type="submit" className='cursor-pointer bg-blue-500 p-4'>
                    Save todo
                </button>
            </form>
        </div>
    )
}

export default page
*/