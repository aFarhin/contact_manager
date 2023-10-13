import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const handleAddTask = () => {
    const newTask = { task, status, date };
    onAddTask(newTask);
    setTask('');
    setStatus('');
    setDate('');
  };

  return (
    <div>
      <label>Task:</label>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <br />
      <label>Status:</label>
      <input value={status} onChange={(e) => setStatus(e.target.value)} />
      <br />
      <label>Date:</label>
      <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
      <br />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
