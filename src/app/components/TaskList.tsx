import React from 'react';

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Task 1', priority: 'P0', status: 'Todo', created_by: 'Shirso' },
    { id: 2, title: 'Task 2', priority: 'P1', status: 'In Progress', created_by: 'Ram' },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">All Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="border p-2 my-2">
            <h3>{task.title}</h3>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <p>Created By: {task.created_by}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
