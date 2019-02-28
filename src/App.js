import React, { useState } from "react"
import TodoInput from './components/TodoInput/'

function App() {

  const [ todos, modifyToDos ] = useState(['study with kahaan'])

  return <TodoInput />
}

export default App
