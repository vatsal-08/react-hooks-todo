import "./App.css";
import TodoForm from "./components/TodoForm";
import { Typography } from "@mui/material";
const App = () => {
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodo={console.warn} />
    </div>
  );
};

export default App;
