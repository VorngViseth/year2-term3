import express from "express";
import articlesRouter from "./routes/articleRoutes.js";
import journalistsRouter from './routes/journalistRoutes.js';
import categoryRouter from './routes/categoryRoutes.js'

const app = express();
app.use(express.json());

const PORT = 3000;

app.use(articlesRouter);
app.use(journalistsRouter);
app.use(categoryRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});