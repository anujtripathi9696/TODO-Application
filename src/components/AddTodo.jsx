import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import "./AddTodo.css";

function AddTodo() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      if (event.target.name === "todoName" && todoName) {
        document.querySelector('.todo-input[name="dueDate"]').focus(); // Focus on the date input
      } else if (event.target.name === "dueDate" && dueDate && todoName) {
        handleAddButtonClicked(); // Add the task
      }
    }
  };

  const handleAddButtonClicked = () => {
    if (todoName && dueDate) {
      // Check if both inputs have values
      dispatch(addTodo({ name: todoName, dueDate: dueDate }));
      setDueDate("");
      setTodoName("");
    }
  };

  return (
    <div className="container text-center mt-3">
      <div className="input-group mb-3">
        <input
          type="text"
          name="todoName"
          className="form-control todo-input"
          placeholder="Enter Todo Here"
          value={todoName}
          onChange={handleNameChange}
          onKeyDown={handleKeyDown}
        />
        <input
          type="date"
          name="dueDate"
          className="form-control todo-input"
          value={dueDate}
          onChange={handleDateChange}
          onKeyDown={handleKeyDown}
        />
        <div className="input-group-append">
          <button
            className="btn todo-add-btn"
            type="button"
            onClick={handleAddButtonClicked}
          >
            <strong className="add-btn-icon">+</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
