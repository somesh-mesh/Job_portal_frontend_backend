import { Job } from "../models/job.model.js";
export const postJob = async (req, res) => {
    try {
        const { title, description, requirement, salary, location, jobType, experience, postion, companyId } = req.body;
        const usedId = req.user.id;
        if(!title || !description || !requirement || !salary || !location || !jobType || !experience || !position || !companyId){
           return res.status(400).json({
            message : "Something is missing",
            success:false
           }) 
        };
        const job = await  Job.create({
            title,
            description,
            requirement,
            salary,
            location,
            jobType,
            experience,
            position,
            company:companyId,
            created_by:userId,
        });

        return res.status(201).json({
            message: "Job posted successfully",
            job,
            success:true
        });  

    }
    catch (error) {
        console.log(error);
    }
}

export const getAllJobs = async  (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                {title:{$regex:keyword,$options:'i'}},
                {description:{$regex:keyword,$options:'i'}},
            ]
        };
        const job = await Job.find(query);
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        return  res.status(200).json({
            jobs,
            success:true
        });

    }
    catch(error){
        console.log(error);

    }
}

export const getJobById = async  (req, res) => {
    try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if(!job){
        return res.status(404).json({
            message:"Job not found",
            success:false
        });
    }
    catch(error){
        console.log(error);
    }
}

export const getAdminJobs = async   (req, res) => {
    try{
        const adminId = req.user.id;
        const jobs = await Job.find({adminId});
        if(!jobs){
            return res.status(404).json({
                message : "Jobs not found.",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })

    }catch(error){
        console.log(error);
    }
}


