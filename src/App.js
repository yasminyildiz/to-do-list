import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/ToDoList";
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [taskId, setTaskId] = useState(0);
  const [statu, setStatu] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleCheckBoxChange = (event) => {
    setStatu(event.target.checked ? true : false);
  };

  function generateRandomId() {
    const randomId = Math.floor(Math.random() * 20);
    return randomId;
  }

  const handleAddTask = () => {
    setTodoList((todoList) => {
      if (taskId === 0) {
        const newTask = {
          id: generateRandomId(),
          task: inputValue,
          status: statu,
        };
        const updatedTaskList = [newTask, ...todoList];
        setInputValue("");
        setTaskId(0);
        return updatedTaskList;
      } else {
        const updatedTaskList = todoList.map((item) => {
          if (item.id === taskId) {
            return {
              id: taskId,
              task: inputValue,
              status: statu,
            };
          }
          setInputValue("");
          setTaskId(0);
          return item;
        });
        setInputValue("");
        return updatedTaskList;
      }
    });
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item, itemIndex) => item.id !== id));
  };
  const handleEdit = (id) => {
    const selectedTask = todoList.filter(
      (item, itemIndex) => item.id === id
    )[0];
    setInputValue(selectedTask.task);
    setTaskId(selectedTask.id);
  };

  const handleCheck = (id) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: statu,
        };
      }
      return item;
    });

    setTodoList(updatedTodoList);
  };

  return (
    <div className="addTaskContainerDiv">
      <div className="addTaskDiv mt-5">
        <div>
          <h4> Add Task </h4>
          <label htmlFor="addTask" className="form-label">
            What do u want to do?
          </label>
          <input
            value={inputValue}
            onChange={handleInputChange}
            className="form-control"
            required
          />
          <input type="hidden" value={taskId} />
          <button onClick={handleAddTask}>Add</button>
        </div>
      </div>
      <TodoList
        todoList={todoList}
        handleCheckBoxChange={handleCheckBoxChange}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
