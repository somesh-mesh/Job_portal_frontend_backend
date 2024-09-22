import { Job } from "../models/job.model.js";

// Post a Job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirement, salary, location, jobType, experience, position, companyId } = req.body; // Fixed typo in 'position'
        const userId = req.user.id; // Corrected from usedId to userId

        // Check for missing fields
        if (!title || !description || !requirement || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }

        // Create new Job
        const job = await Job.create({
            title,
            description,
            requirement,
            salary,
            location,
            jobType,
            experience,
            position, // Fixed typo 'postion' to 'position'
            company: companyId,
            created_by: userId, // Use userId for created_by field
        });

        return res.status(201).json({
            message: "Job posted successfully.",
            job,
            success: true
        });

    } catch (error) {
        console.error("Error posting job:", error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false
        });
    }
};

// Get All Jobs with Keyword Search
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
            ]
        };

        const jobs = await Job.find(query); // Changed 'job' to 'jobs' (plural)
        if (!jobs || jobs.length === 0) { // Ensure array length is checked
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            });
        }

        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        console.error("Error fetching jobs:", error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false
        });
    }
};

// Get Job By ID
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;

        // Find job by ID
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false
            });
        }

        return res.status(200).json({
            job,
            success: true
        });

    } catch (error) {
        console.error("Error fetching job by ID:", error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false
        });
    }
};

// Get Admin Jobs
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.user.id;

        // Find jobs created by the admin
        const jobs = await Job.find({ created_by: adminId }); // Fixed the query to match 'created_by'
        if (!jobs || jobs.length === 0) { // Ensure array length is checked
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            });
        }

        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        console.error("Error fetching admin jobs:", error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false
        });
    }
};
