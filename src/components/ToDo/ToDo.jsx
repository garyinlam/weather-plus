import React, { useState } from 'react'
import "./ToDo.scss"
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList';

const ToDo = () => {
  const [ toDos, setToDos] = useState([])

  const addToDo = (toAdd) => {
    setToDos([...toDos,toAdd]);
  }
  
  return (
    <div className='to-do'>
      <ToDoForm addToDo={addToDo} />
      <ToDoList toDos={toDos} />
    </div>
  )
}

export default ToDo