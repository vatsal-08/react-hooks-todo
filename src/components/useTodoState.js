import { useState } from "react";

const useTodoState = (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  const addTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };

  const deleteTodo = (todoIndex) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== todoIndex)
    );
  };

  const editTodo = (todoIndex, todoText) => {
    if (todos[todoIndex] === todoText) {
      return;
    }

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift(todoText);
      return updatedTodos;
    });
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
  };
};

export default useTodoState;
