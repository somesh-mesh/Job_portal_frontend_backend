import { Company } from "../models/company.model.js";



//http://localhost:8000/api/v1/company/register
export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "You can't register same company.",
                success: false
            })
        };
        company = await Company.create({
            name: companyName,
            userId: req.user.id
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}


//http://localhost:8000/api/v1/company/get
export const getCompany = async (req, res) => {
    try {
        const userId = req.user.id; // logged in user id
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({
                message: "Companies not found.",
                success: false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// get company by id
//this working fine.
// http://localhost:8000/api/v1/company/get/mongoId
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

//http://localhost:8000/api/v1/company/update/mongoId
export const updateCompany = async (req, res) => {
    try {
        // Initialize an empty object to hold the fields that need to be updated
        const updateData = {};

        // Conditionally add fields to updateData if they are provided in the request body
        const { name, description, website, location } = req.body;

        if (name) updateData.name = name;
        if (description) updateData.description = description;
        if (website) updateData.website = website;
        if (location) updateData.location = location;

        // You can implement the logic for cloudinary and file upload here when necessary
        // Uncomment the following lines if you plan to handle the logo upload
        /*
        const file = req.file;
        if (file) {
            const fileUri = getDataUri(file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
            updateData.logo = cloudResponse.secure_url; // Add the logo field only if file upload is successful
        }
        */

        // Find the company by its ID and update it with the provided fields
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        // Return a success response
        return res.status(200).json({
            message: "Company information updated.",
            success: true,
            company // Optionally return the updated company data
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error. Please try again later.",
            success: false
        });
    }
};
