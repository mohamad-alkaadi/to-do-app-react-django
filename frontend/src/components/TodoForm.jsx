import React from 'react'

const TodoForm = () => {
  return (
    <div>
      <input type="text" placeholder="Add Todo" className="input input-bordered input-info w-full max-w-xs bg-white" />
      <button className="btn btn-primary ml-2">Primary</button>
    </div>
  )
}

export default TodoForm