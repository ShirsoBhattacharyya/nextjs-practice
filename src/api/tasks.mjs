import connectDB from '../database/mongoose.mjs';
import Task from '../database/models/Task.mjs';

export const createTask = async(req, res) => {
  await connectDB();
  const { userId, text, priority, status } = req.body;

  try {
    await Task.create({ userId, text, priority, status });
    return res.status(201).json({ message: 'Task creation successful.' });
  } catch (error) {
    return res.status(500).json({ message: 'Task creation failed.' });
  }
}

export const getTasks = async(req, res) => {
  await connectDB();
  
  const { userId } = req.query;

  try {
    const tasks = await Task.find(userId ? { userId } : {});
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: 'Fetching tasks failed' });
  }
}

export const updateTask = async(req, res) => {
  await connectDB();
  const { taskId, status, priority } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status, priority },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(500).json({ message: 'Updating task failed' });
  }
}
