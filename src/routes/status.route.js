import express from 'express'
import { getJobStatus } from '../controllers/status.controller.js'  

const router = express.Router();
router.get('/', getJobStatus);

export default router;