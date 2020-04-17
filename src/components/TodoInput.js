import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos.js";

// Receives listId as input
export const TodoInput = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")

  // State for input from text box

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(todos.actions.addTodo({
      description: inputValue,
      done: false
    })
    )
    setInputValue("")
  }

  // Create handle submit function to dispatch addTodo
  return <form className="todo-input" onSubmit={handleOnSubmit}>
    <input
      type="text"
      onChange={e => setInputValue(e.target.value)}
      value={inputValue}
      className="todo-input-text"
    ></input>
    <input
      type="submit"
      className="todo-input-button"
      value="Add todo"
    ></input>
  </form>;
};
