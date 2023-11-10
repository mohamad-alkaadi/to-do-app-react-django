import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../components/Table'
import TodoForm from '../components/TodoForm'

const Todo = () => {
  const [todos, setTodos] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/todo/")
      setTodos(response.data)
      setIsLoading(false)
    } catch (error){
      console.log(error)
    }
  }


  useEffect( () => {
    fetchData()
    console.log(todos)
  }, [])

  return (
    <div>
        <TodoForm setTodos={setTodos} fetchData={fetchData}/>
        <Table todos={todos} setTodos={setTodos} isLoading={isLoading} fetchData={fetchData}/>
    </div>
  )
}

export default Todo