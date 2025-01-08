import express from 'express';
import { addTask, deleteTask, editTask, getTask } from '../controllers/taskController.js';

const router = express.Router();

//getTask route
router.get('/get', getTask);

//addTask route
router.post('/add', addTask);

//deleteTask route
router.delete('/delete', deleteTask);

//editTask route
router.patch('/edit', editTask);

export default router;