import React, { useState, useEffect } from 'react';
import AddTask from '../Functions/Todos/AddTask';

function TodoList() {
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return savedTasks
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="todo-main">
      <div className="todo">
        <AddTask onAddTask={addTask} />
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div>Task: {task.task}</div>
              <div>Status: {task.status}</div>
              <div>Date: {task.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
