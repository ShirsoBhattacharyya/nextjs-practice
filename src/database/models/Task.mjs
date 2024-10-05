import { Schema, model } from 'mongoose';


const TaskSchema = new Schema({
  title: { type: String, required: true },
  priority: { type: String, enum: ['P0', 'P1'], required: true },
  status: { type: String, enum: ['Todo', 'In Progress', 'In Review', 'Done'], required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default model('Task', TaskSchema);