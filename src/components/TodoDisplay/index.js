import React from 'react'
import TodoItem from './TodoItem'
import {TodoWrapper} from './styles'

const index = ({todos, deleteTodo}) => {
  return (
    <TodoWrapper>
      {
        todos.map((todo,index) => 
          <div key={index} onClick={() => deleteTodo(index)}>
            {todo}
          </div>
        )
      }
    </TodoWrapper>
  )
}

export default index
