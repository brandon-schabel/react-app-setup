import React from 'react'
import TodoItem from './TodoItem'
import {TodoWrapper} from './styles'

const index = ({todos}) => {
  return (
    <TodoWrapper>
      {
        todos.map(todo => 
          <div>
            {todo}
          </div>
        )
      }
    </TodoWrapper>
  )
}

export default index
