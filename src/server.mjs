import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/mongoose.mjs';
import { signup, login } from './api/auth.mjs';
import { createTask, getTasks, updateTask } from './api/tasks.mjs';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();


// Default route
app.get('/api', (req, res) => {
    res.json({message:'API is running...'});
});

// Routes
app.post('/api/auth/signup', signup);
app.post('/api/auth/login', login);
app.post('/api/tasks', createTask);
app.get('/api/tasks', getTasks);
app.put('/api/tasks', updateTask);

// Set port from environment variables or fallback to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
