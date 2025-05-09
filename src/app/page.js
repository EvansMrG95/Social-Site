"use client"
import {useState, useEffect} from "react"
import SocialCard from "./components/SocialCard";

export default function Home() {

  const [business, setBusiness] = useState([])

  useEffect(() => {
    const loadbusiness = () => {
      const storedBusiness = localStorage.getItem("business")
      if(storedBusiness) {
        const parsedBusiness = JSON.parse(storedBusiness)
        setBusiness(parsedBusiness)
      }
    }
    loadbusiness()
  }, [])

  return (
    <div>
      <h1 className="text-5xl font-bold text-white text-center mb-6">Profit Platform</h1>
      <p className="text-2xl font-bold text-white text-center mb-6">This is a pre-sale platform to aid local businesses to find out if a product they could stock would sell to potential customers.</p>
      {business.map((item) => {
        return (
          <SocialCard 
            key={item.id}
            id={item.id}
            name={item.businessName}
            imageUrl={item.imageUrl}
            postText={item.description}
            price={item.price}
            initialLikeCount={item.initialLikeCount}
            reccomendedPrice={item.price}
          />
        )
      })}
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
