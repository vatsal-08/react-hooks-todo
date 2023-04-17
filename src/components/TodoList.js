import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const TodoList = ({ todos, deleteTodo, editTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={todo} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="Edit"
            onClick={(e) => {
              editTodo(e, index);
            }}
          >
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);
export default TodoList;
