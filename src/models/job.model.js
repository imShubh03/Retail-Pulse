import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    visits: [
        {
            store_id: { 
                type: String, 
                required: true 
            },
            image_url: { 
                type: [String], 
                required: true 
            },
            visit_time: { 
                type: Date, 
                required: true 

            },
            results: [
                {
                    image_url: { type: String },
                    perimeter: { type: Number },
                },
            ],
        },
    ],
    status: { 
        type: String, 
        enum: ['ongoing', 'completed', 'failed'], 
        default: 'ongoing' 
    },
    error: { 
        type: [Object], 
        default: [] 
    },
}, { timestamps: true });

const Job = mongoose.model("Job", jobSchema);

export default Job;

