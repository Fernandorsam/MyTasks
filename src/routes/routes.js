import { Router } from "express";
import { listTasks, listTasksById, createTask, changeTask, deleteTask } from '../controllers/controller.js';


const router = Router();

router.get('/tasks', listTasks);
router.get('/tasks/:id', listTasksById);
router.post('/tasks', createTask);
router.put('/tasks/:id', changeTask);
router.delete('/tasks/:id', deleteTask);
export default router;