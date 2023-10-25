import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-500 grid justify-center'>
      <h1 className=''>Hello world</h1>
    </div>
  )
}

export default App
