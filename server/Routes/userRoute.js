import express from "express";
import { getTodos } from "../Controllers/todoController.js";

const router = express.Router();

router.get('/todos',getTodos);

export default router;