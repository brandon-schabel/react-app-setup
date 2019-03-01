import React, { useState } from "react"
import TodoInput from './components/TodoInput/'
import TodoDisplay from './components/TodoDisplay'

function App() {

  const [todos, modifyToDos] = useState(['study with kahaan', 'eat dinner'])

  return <div>
    <TodoInput />
    <TodoDisplay todos={todos}/>
  </div>

}

export default App
