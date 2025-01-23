import express from 'express'
import { submitJob } from '../controllers/job.controller.js'

const router = express.Router();

router.post('/', submitJob);

export default router;
