import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='p-2 bg-blue-200 flex justify-between'>
        <Link to="/" className='text-center text-2xl hover:text-slate-600'>To-Do List</Link>
        <Link to="/notes" className='text-center text-2xl hover:text-slate-600'>Notes</Link>
    </nav>
  )
}

export default NavBar