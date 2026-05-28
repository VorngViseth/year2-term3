import { getAll, getById, deleteCategoryById, updateCategoryById, createNewCategory } from "../controllers/categoryController.js";

import express from "express";
const router = express.Router();

router.get('/categories', getAll)

router.get('/categories/:id', getById)

router.delete('/categories/:id', deleteCategoryById)

router.put('/categories/:id', updateCategoryById)

router.post('/categories', createNewCategory)

export default router;