import React, { useState, useRef, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const TodoList = ({ todos, deleteTodo }) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");
  const inputRef = useRef(null);

  const handleEditClick = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const handleSaveEdit = (index) => {
    // Implement your save edit logic here
    // You can use the index and updated text to modify the todo item
    setEditIndex(-1);
    setEditText("");
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      handleSaveEdit(index);
    }
  };

  useEffect(() => {
    if (inputRef.current && editIndex !== -1) {
      inputRef.current.focus();
    }
  }, [editIndex]);

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem
          key={index.toString()}
          dense
          button
          style={{ backgroundColor: index === editIndex ? "#E0E0E0" : "white",
        paddingLeft: "144px"}}
        >
          {index === editIndex ? (
            <TextField
              inputRef={inputRef}
              variant="outlined"
              margin="normal"
              value={editText}
              onChange={(event) => setEditText(event.target.value)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            />
          ) : (
            <ListItemText primary={todo} />
          )}
          <ListItemSecondaryAction>
            {index === editIndex ? (
              <IconButton
                aria-label="Save"
                onClick={() => handleSaveEdit(index)}
              >
                <SaveIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="Edit"
                onClick={() => handleEditClick(index, todo)}
              >
                <EditIcon />
              </IconButton>
            )}
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
