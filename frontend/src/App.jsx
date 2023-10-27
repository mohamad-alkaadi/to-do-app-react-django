import { useState } from 'react'
import './App.css'
import Table from './components/Table'
import TodoForm from './components/TodoForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-indigo-100 px-8 min-h-screen'>
      <nav className='pt-8'>
        <h1 className='text-center text-5xl'>To-Do List</h1>
      </nav>
      {/* <TodoForm/> */}
      <Table/>
    </div>
  )
}

export default App
