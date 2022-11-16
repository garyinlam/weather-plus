import React from 'react'
import "./ToDoList.scss"

const ToDoList = ({toDos}) => {

  const toDosJSX = toDos?.map((toDo,index) => (
    <li className='to-do-list__single' key={index} >{toDo}</li>
  ))

  return (
    <ul className='to-do-list'>{toDosJSX}</ul>
  )
}

export default ToDoList