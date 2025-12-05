import { Router } from "express";
import { listTasks, listTasksById, createTask, changeTask, deleteTask } from '../controllers/controller.js';


const router = Router();

router.get('/', listTasks);
router.get('/:id', listTasksById);
router.post('/', createTask);
router.put('/:id', changeTask);
router.delete('/:id', deleteTask);

export default router;