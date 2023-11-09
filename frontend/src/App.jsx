import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Table from './components/Table'
import TodoForm from './components/TodoForm'
import axios from 'axios'
import Todo from './pages/Todo'
import Notes from './pages/Notes'
import NavBar from './components/NavBar'

function App() {
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
    <div className='bg-indigo-100 text-black px-8 min-h-screen'>

      
      <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Todo todos={todos} setTodos={setTodos} fetchData={fetchData} isLoading={isLoading} />}/>
        <Route path='/notes' element={<Notes/>}/>
      </Routes>
      </Router>

    </div>
  )
}

export default App
