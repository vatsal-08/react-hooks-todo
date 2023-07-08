import React from "react";
import TextField from "@mui/material/TextField";
import useInputState from "./useInputState";

const TodoForm = ({ saveTodo }) => {
  const { value, onChange, reset } = useInputState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() !== "") {
      saveTodo(value);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
