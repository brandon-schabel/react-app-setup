import React, { useState } from "react"
import TodoInput from './components/TodoInput/'
import TodoDisplay from './components/TodoDisplay'

function App() {

  const [todos, modifyTodos] = useState(['study with kahaan', 'eat dinner'])

  const addToDo = (todo) => { 
    modifyTodos([...todos, todo]) 
  } 

  const deleteTodo = (index) => {
    let newTodos = todos
    newTodos.splice(index, 1)
    modifyTodos([...newTodos])
  }

  return <div>
    <TodoInput addToDo={addToDo} />
    <TodoDisplay todos={todos} deleteTodo={deleteTodo} />
  </div>

}

export default App
