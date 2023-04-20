import { useState } from "react";
import useInputState from "./useInputState";
export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue);
  const { value, onChange, reset, editingConfig, setEditingConfig } =
    useInputState("");
  const addTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };
  return {
    todos,
    addTodo,
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    },
    editTodo: (e, editIndex) => {
      e.preventDefault();
      setEditingConfig({ ind: editIndex });
      console.log(editingConfig?.ind);
      // const editTodos = todos.filter((_, index) => index === editIndex);
      // setTodos(newTodos);
      // // const newTodos = todos.filter((_, index) => index !== editIndex);
      // setTodos(newTodos);
    },
    saveTodo: (todoText) => {
      todoText = todoText.trim();
      if (todoText.length > 0) {
        if (!editingConfig?.id) {
          addTodo(todoText);
          setEditingConfig();
        } else {
          todos[editingConfig.id] = todoText;
          setTodos([...todos]);
          setEditingConfig();
        }
        reset();
      }
    },
    value,
    onChange,
    reset,
    editingConfig,
    setEditingConfig,
  };
};
