import React, { useState } from 'react'
import "./ToDoForm.scss"

const ToDoForm = ({addToDo}) => {
  const [ value,setValue ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) {
      return;
    }
    setValue("")
    addToDo(value)
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="to-do-form">
      <label htmlFor="new-todo" className='to-do-form__label' >Add a new to do</label>
      <input
        type="text"
        id="new-todo"
        onInput={handleChange}
        value={value}
        className="to-do-form__input"
      />
      <button className="to-do-form__button">Add to do</button>
    </form>
  )
}

export default ToDoForm