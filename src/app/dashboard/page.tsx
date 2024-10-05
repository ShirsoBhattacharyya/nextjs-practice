"use client";

import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Dashboard;