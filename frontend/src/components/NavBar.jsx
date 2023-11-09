import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='pt-8 flex justify-between'>
        <Link to="/" className='text-center text-5xl pb-12'>To-Do List</Link>
        <Link to="/notes" className='text-center text-5xl pb-12'>Notes</Link>
    </nav>
  )
}

export default NavBar