import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import React from "react";
import { Typography } from "@mui/material";
import useTodoState from "./components/useTodoState";

const App = () => {
  const { todos, addTodo, deleteTodo, editTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm
        saveTodo={(todoText) => {
          if (todoText) {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
              addTodo(trimmedText);
            }
          }
        }}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};
export default App;
