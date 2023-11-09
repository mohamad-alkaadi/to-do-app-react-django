import React from 'react'
import Table from '../components/Table'
import TodoForm from '../components/TodoForm'

const Todo = ({todos, setTodos, fetchData, isLoading}) => {
  
  return (
    <div>
        <TodoForm setTodos={setTodos} fetchData={fetchData}/>
        <Table todos={todos} setTodos={setTodos} isLoading={isLoading} fetchData={fetchData}/>
    </div>
  )
}

export default Todo