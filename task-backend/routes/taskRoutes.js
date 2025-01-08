import express from 'express';
import { addTask, deleteTask, editTask } from '../controllers/taskController';

const router = express.Router();

//addTask route
router.post('/add', addTask);

//deleteTask route
router.delete('/delete', deleteTask);

//editTask route
router.patch('/edit', editTask);