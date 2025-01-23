
import Job from "../models/job.model.js";
import { processImage } from "./processImage.js";

export const processJob = async (job) => {

    try {
        for (const visit of job.visits) {
            const results = [];

            for (const url of visit.image_url) {
                try {
                    const result = await processImage(url);
                    results.push(result);
                } catch (error) {
                    job.status = 'failed';
                    job.error.push({ store_id: visit.store_id, error: error.message });
                    await job.save();
                    return;
                }
            }
            
            visit.results = results;

        }
        job.status = 'completed';
        await job.save();


    } catch (error) {
        console.error('Error processing job:', error);
    }
}