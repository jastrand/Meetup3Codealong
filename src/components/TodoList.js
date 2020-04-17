import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem.js";
import { TodoInput } from "./TodoInput.js";
import { TodoSummary } from "./TodoSummary.js";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const list = useSelector(store => store.todos.list)
  // Get list information for this list from the store

  /*
    - Show TodoInput
    - Show each TodoItem in the list
    - Show TodoSummary
  */
  return (
    <section className="todo-list">
      <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem itemIndex={index}></TodoItem>
      ))}
      <TodoSummary />
    </section>
  )
};
