import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.user.id;
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(404).json({ message: "Job id is required." });
        }

        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this job.",
                success: false,
            });
        }

        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false,
            });
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        });

        job.application.push(newApplication._id);
        await job.save();

        return res.status(201).json({
            message: "Job applied successfully.",
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
};

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.user.id;
        const applications = await Application.find({
            applicant: userId,
        })
            .sort({ createdAt: -1 })
            .populate({
                path: "job", // Changed from "jobs" to "job"
                populate: {
                    path: "company",
                },
            });

        if (!applications || applications.length === 0) {
            return res.status(404).json({
                message: "No applications found.",
                success: false,
            });
        }

        return res.status(200).json({
            applications,
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
};

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;

        // Find the job by its ID and populate the "application" field with related "applicant" data
        const job = await Job.findById(jobId)
            .populate({
                path: 'application',        // Populating the 'application' field from the Job model
                populate: {
                    path: 'applicant',      // Populating the 'applicant' field from the Application model
                    select: 'name email',   // Selecting specific fields from the applicant (e.g., name, email)
                },
                options: { sort: { createdAt: -1 } },  // Sorting applications by creation date
            });

        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false,
            });
        }

        // If no applications were found
        if (!job.application || job.application.length === 0) {
            return res.status(404).json({
                message: "No applicants found for this job.",
                success: false,
            });
        }

        // Returning the populated job applications (applicants)
        return res.status(200).json({
            job,
            success: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
};

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;

        if (!status) {
            return res.status(400).json({
                message: "Status is required",
                success: false,
            });
        }

        const application = await Application.findOne({ _id: applicationId });
        if (!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false,
            });
        }

        application.status = status.toLowerCase(); // Fixed typo: toLowerCaser() to toLowerCase()
        await application.save();

        return res.status(200).json({
            message: "Application status updated successfully",
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
};
