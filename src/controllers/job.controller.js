import Job from "../models/job.model.js";
import Store from "../models/store.model.js";
import {processJob} from '../services/jobQueue.js'

export const submitJob = async(req , res) => {
    try {
        const { count, visits } = req.body;

        // Validate payload
        if (count !== visits.length) {
            return res.status(400).json({ error: 'Count does not match visits length.' });
        }

        // Validate store IDs
        for (const visit of visits) {
            const store = await Store.findOne({ store_id: visit.store_id });
            if (!store) {
                return res.status(400).json({ error: `Invalid store_id: ${visit.store_id}` });
            }
        }

        // Create job
        const jobId = `JOB-${Date.now()}`;
        const job = await Job.create({ jobId, visits });

        // Start processing job
        processJob(job);

        res.status(201).json({ job_id: jobId });
        
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            error:'Internal server error'
        });
    }
}