import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from "react-toastify";

const ToDoForm = ({ toDoItems, setToDoItems }) => {
  const [todo, setToDo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDo("");
    if (toDoItems.length === 3) {
      return toast.warn("You can't add more than 3 adventures 🏔️ ");
    }
    if (toDoItems.length <= 3) {
      setToDoItems((prevValues) => [
        ...prevValues,
        { id: uuidv4(), todo: todo, check: false, editTodo: false },
      ]);
    }
  };

  useEffect(() => {
    // Save todo items to local storage whenever the list changes
    localStorage.setItem("todos", JSON.stringify(toDoItems));
  }, [toDoItems]);

  return (
    <div className="todo-form-wrapper ">
      <p>Enter top 3 adventures for the day 🏔️</p>
      <form action="" className="todo-form" onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          name="adventure"
          placeholder="Enter your adventure (task)"
          className="todo-form-input"
          onChange={(e) => {
            setToDo(e.target.value);
          }}
        />
        <button
          alt="todo-add-btn"
          type="submit"
          className="todo-form-addBtn btn"
        >
          <IoIosAddCircle />
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
