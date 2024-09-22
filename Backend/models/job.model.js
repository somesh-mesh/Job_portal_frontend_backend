import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: [{
        type: String,
    }],
    salary: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    experinceLevel: {
        type: Number,
        required: true,
    },
    company: {
        type: mongoose.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    created_by: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    application: {
        type: mongoose.Types.ObjectId,
        ref: 'Application',
    },
}, { timestamps: true });  // Fixed from timeseries to timestamps

export const Job = mongoose.model('Job', jobSchema);
