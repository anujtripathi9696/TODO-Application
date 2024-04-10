// App.jsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/todoSlice";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos);

  // Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      storedTodos.forEach((todo) => dispatch(addTodo(todo)));
    }
  }, [dispatch]);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

  // Handlers for deleting and toggling todos
  const handleDeleteItem = (todoItemName) => {
    dispatch(deleteTodo(todoItemName));
  };

  const handleToggleItem = (todoItemName) => {
    dispatch(toggleTodo(todoItemName));
  };

  // Separate tasks into two categories: tasks and done
  const tasks = todoItems.filter((item) => !item.isCompleted);
  const done = todoItems.filter((item) => item.isCompleted);

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="alignment-container">
        {todoItems.length === 0 ? (
          <WelcomeMessage />
        ) : (
          <>
            <h5>Tasks - {tasks.length}</h5>
            <TodoItems
              todoItems={tasks}
              onDeleteClick={handleDeleteItem}
              onToggleClick={handleToggleItem}
            />
            <h5>Done - {done.length}</h5>
            <TodoItems
              todoItems={done}
              onDeleteClick={handleDeleteItem}
              onToggleClick={handleToggleItem}
            />
          </>
        )}
      </div>
    </center>
  );
}

export default App;
