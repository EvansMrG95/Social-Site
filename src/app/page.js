"use client"
import Image from "next/image";
import React from "react"
import SocialCard from "./components/SocialCard";

const post = [
  {
    name: "Electric Toothbrush Kit",
    imgAddress: "https://cdn.pixabay.com/photo/2013/05/31/20/03/toothbrush-115105_960_720.jpg",
    postText: `An electric toothbrush kit typically includes a rechargeable electric toothbrush handle, one or more brush heads, and a charging base or USB cable. Some kits may also feature a travel case, built-in timers, pressure sensors, or multiple brushing modes for plaque removal, gum care, and whitening. Designed to improve oral hygiene more effectively than manual brushing, these kits are ideal for users seeking convenience and better dental care.`,
    reccomendedPrice: 34.99,
    initialLikeCount: 0,
    intialDislikeCount: 0,
  },
  {
    name: "Robot Vacuum Dust Cleaner",
    imgAddress: "https://cdn.pixabay.com/photo/2023/07/08/10/47/vacuum-cleaner-8114145_960_720.jpg",
    postText: `This Robot Vacuum takes the hassle out of everyday cleaning with powerful suction, smart navigation, and automatic dust collection. Designed to glide effortlessly across carpets and hard floors, it picks up dirt, dust, pet hair, and debris with ease. With scheduled cleaning, obstacle detection, and auto-return charging, it’s the perfect low-maintenance solution for busy homes.`,

    reccomendedPrice: 249.99,
    initialLikeCount: 0,
    intialDislikeCount: 0,
  }
]

export default function Home() {
  return (
    <div>
      <p className="text-5xl font-bold text-gray-800 text-center mb-6">Profit Platform</p>
      {post.map((item) => {
        return (
          <SocialCard 
            key={item.name}
            name={item.name}
            imgAddress={item.imgAddress}
            postText={item.postText}
            initialLikeCount={item.initialLikeCount}
            reccomendedPrice={item.reccomendedPrice}
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
