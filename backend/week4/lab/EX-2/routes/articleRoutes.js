import { getAll, getById, deleteArticleById, updateArticleById, createNewArticle } from "../controllers/articlesController.js";

import express from "express";
const router = express.Router();

router.get('/articles', getAll)

router.get('/articles/:id', getById)

router.delete('/articles/:id', deleteArticleById)

router.put('/articles/:id', updateArticleById)

router.post('/articles', createNewArticle)

export default router;