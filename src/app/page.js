"use client"
import Image from "next/image";
import React from "react"

export default function Home() {
  return (
    <div>
      
    </div>
  );
}

/*
"use client"
import {useState} from "react"
import {useEffect} from "react"
import Todoitem from "./components/Todoitem"

export default function Home() {

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTodos = () => {
      const storedTodos = localStorage.getItem("todos")
      if (storedTodos){
        const parsedTodos = JSON.parse(storedTodos)
        setTodos(parsedTodos)
        setLoading(false)
      }
    }
    loadTodos()
  }, [])

  const handleTodoUpdate = (id) => {
    console.log(id)
    const updatedTodos = todos.map(todo => {
      if (todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      {
        todos?.length === 0 ? (
          <div>No todos found</div>
        ) : (
          <div>
            {todos?.map((todo) => {
              return (
                <Todoitem 
                  key = {todo.Id}
                  title = {todo.title}
                  completed={todo.completed}
                  description={todo.description}
                  id={todo.id}
                  handleUpdate={handleTodoUpdate}
                />
              )
            })}
          </div>
        )
      }
    </div>
  );
}

*/
