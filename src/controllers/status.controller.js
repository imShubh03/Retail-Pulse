import Job from "../models/job.model.js";

export const getJobStatus = async(req, res) => {
    try {
        //fetch the jobId from the query
        const { jobId } = req.query;

        const job = await Job.findOne({jobId: jobId});
        if(!job){
            return res.status(400).json({
                error:'job Id doesnot exist'
            })
        }
        //jobId is found
        res.status(200).json({
            status:job.status,
            job_id : job.jobId,
            ...(job.status === 'failed' && {error: job.error}),
            ...(job.status === 'completed' && {results:job.visits}),
        });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            error:'Internal server error'
        })
    }
}