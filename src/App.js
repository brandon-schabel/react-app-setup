import React, { useState } from "react"
import TodoInput from './components/TodoInput/'
import TodoDisplay from './components/TodoDisplay'

function App() {

  const [todos, modifyToDos] = useState(['study with kahaan', 'eat dinner'])

  const addToDo = (todo) => {
    modifyToDos([...todos, todo])
  } 
  console.log(todos)
  return <div>
    <TodoInput addToDo={addToDo} />
    <TodoDisplay todos={todos}/>
  </div>

}

export default App
