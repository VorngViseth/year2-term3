import { getAll, getById, updateJournalistById, deleteJournalistById, createNewJournalist} from '../controllers/journalistController.js';

import express from 'express';
const router = express.Router();

router.get('/journalists', getAll)

router.get('/journalists/:id', getById)

router.post('/journalists', createNewJournalist)

router.delete('/journalists/:id', deleteJournalistById)

router.put('/journalists/:id', updateJournalistById)

export default router;