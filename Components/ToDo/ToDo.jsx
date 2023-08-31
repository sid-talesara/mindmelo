import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Modal from "../Modal";

const getLocalStorageItems = () => {
  const storedItems = localStorage.getItem("todos");
  if (storedItems) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

const ToDo = ({ setTodoModal }) => {
  const [toDoItems, setToDoItems] = useState(getLocalStorageItems());

  return (
    <Modal setModelActive={setTodoModal}>
      <ToDoForm toDoItems={toDoItems} setToDoItems={setToDoItems} />
      <ToDoList toDoItems={toDoItems} setToDoItems={setToDoItems} />
    </Modal>
  );
};

export default ToDo;
