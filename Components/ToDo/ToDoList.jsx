import React, { useState, useEffect } from "react";
import { BiRun } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { toast } from "react-toastify";

const ToDoList = ({ toDoItems, setToDoItems }) => {
  const [newTodo, setNewTodo] = useState("");

  const checkHandler = (item) => {
    const updatedArray = toDoItems.map((t) => {
      if (t.id === item.id) {
        return { ...t, check: !t.check };
      }
      return t;
    });
    setToDoItems(updatedArray);
  };

  const deleteHandler = (item) => {
    const updatedArray = toDoItems.filter((t) => t.id !== item.id);
    setToDoItems(updatedArray);
  };

  const editHandler = (item) => {
    const updatedArray = toDoItems.map((t) => {
      if (t.id === item.id) {
        return { ...t, editTodo: !t.editTodo };
      }
      return t;
    });
    setToDoItems(updatedArray);
  };

  const updateHandler = (item, e) => {
    e.preventDefault();
    if (newTodo === "") {
      toast.warn("Not entered anything...");
      return;
    }

    const updatedArray = toDoItems.map((t) => {
      if (t.id === item.id) {
        return { ...t, todo: newTodo, editTodo: false };
      }
      return t;
    });
    setToDoItems(updatedArray);
    setNewTodo("");
  };

  useEffect(() => {
    // Save todo items to local storage whenever the list changes
    localStorage.setItem("todos", JSON.stringify(toDoItems));
  }, [toDoItems]);

  return (
    <div className="todo-list">
      {toDoItems.length === 0 && <p>No adventure till now...🙅🏻 </p>}

      {toDoItems.map((item) => (
        <div className="todo-item-wrapper" key={item.id}>
          <span className="todo-item-left">
            {/* Todo-Check */}
            {!item.editTodo && (
              <button
                alt="todo-check-btn"
                className="todo-item-options--btn btn"
                onClick={() => checkHandler(item)}
              >
                <BiRun />
              </button>
            )}
            {/* Todo-Item */}
            <p className={item.check ? "todo-item check" : "todo-item"}>
              {!item.editTodo && item.todo}
            </p>
          </span>

          {/* todo edit form */}
          {item.editTodo && (
            <form
              action=""
              className="todo-item-edit-wrapper"
              onSubmit={(e) => updateHandler(item, e)}
            >
              <input
                value={newTodo}
                type="text"
                name="adventure"
                placeholder="Want to change your adventure?"
                className="todo-item-edit-input"
                onChange={(e) => {
                  setNewTodo(e.target.value);
                }}
              />
              <button
                alt="todo-edit-save-btn"
                type="submit"
                className="btn todo-item-edit--btn"
              >
                <AiFillSave />
              </button>
            </form>
          )}

          {/* todo-options */}
          <span className="todo-item-right">
            {/* Todo-edit btn */}
            {!item.editTodo && (
              <button
                alt="todo-edit-btn"
                className="todo-item-options--btn btn"
                onClick={() => editHandler(item)}
              >
                <AiFillEdit />
              </button>
            )}
            {/* Todo-delete btn */}
            {!item.editTodo && (
              <button
                alt="todo-delete-btn"
                className="todo-item-options--btn btn"
                onClick={() => deleteHandler(item)}
              >
                <FaTrashAlt />
              </button>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
