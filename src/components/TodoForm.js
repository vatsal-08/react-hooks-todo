import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import useInputState from "./useInputState";
const TodoForm = ({ saveTodo, value, onChange,reset }) => {
  // const { value, onChange, reset } = useInputState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
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
