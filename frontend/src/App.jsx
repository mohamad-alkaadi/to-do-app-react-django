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

  return (
    <div className='bg-indigo-100 text-black px-8 min-h-screen'>

      <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Todo/>}/>
        <Route path='/notes' element={<Notes/>}/>
      </Routes>
      </Router>

    </div>
  )
}

export default App
