/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import {Task} from "./Task.jsx";
function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = (task) => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task]);
      setTask(""); // Clear the input field
    }
  };
  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter((task) => task !== taskToDelete));
  };

  return (
    <>
      <div className="container">
        <div className="input">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />

          <button
            className="add-task"
            onClick={() => {
              addTask(task);
            }}
          >
            add task
          </button>
        </div>
        <div>
          {todoList.length > 0 && (
            <div className="list">
              {todoList.map((task, index) => {
                return <Task key={index} task={task} index={index} deleteTask={deleteTask}/>
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
