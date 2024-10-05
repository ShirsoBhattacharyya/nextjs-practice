import React, { useState } from 'react';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('P0');
  const [status, setStatus] = useState('Todo');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, priority, status });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-xl font-semibold">Create a New Task</h2>
      <input 
        type="text" 
        placeholder="Task Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mr-2"
        required 
      />
      <select 
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 mr-2"
      >
        <option value="P0">Priority P0</option>
        <option value="P1">Priority P1</option>
      </select>
      <select 
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 mr-2"
      >
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="In Review">In Review</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2">Create Task</button>
    </form>
  );
};

export default TaskForm;
