import React, { useState } from 'react'
import { InputWrapper } from './styles';

const TodoInput = ({addToDo}) => {

  const [currInput, modCurrInput] = useState('')

  const submitInput = () => {
    addToDo(currInput)
    modCurrInput('')
  }

  return (
    <InputWrapper>
      <input value={currInput} onChange={(e) => modCurrInput(e.target.value)} ></input>
      <button onClick={() => submitInput()}>Submit</button>
    </InputWrapper>
  )
}

export default TodoInput;
