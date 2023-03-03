import express from "express";
import { createTodo, deleteATodo, getTodos } from "../Controllers/todoController.js";

const router = express.Router();

router.get('/todos',getTodos);
router.post('/createTodo',createTodo);
router.delete('/deleteTodo',deleteATodo);


export default router;