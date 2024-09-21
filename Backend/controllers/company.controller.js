import { Company } from "../models/company.model"; // Fix typo in import

// Corrected registerCompany function
export const registerCompany = async (req, res) => { // Fix parameter order
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(409).json({
                message: "Company Name is Required",
                success: false
            });
        }
        let company = await Company.findOne({ name: companyName }); // Fix typo in model name
        if (company) {
            return res.status(400).json({
                message: "You can't register the same company.",
                success: false
            });
        }
        company = await Company.create({
            name: companyName,
            userId: req.id // Assuming userId is attached correctly
        });

        return res.status(201).json({
            message: "Company Registered Successfully",
            company,
            success: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ // Ensure server error response is sent
            message: "Server Error",
            success: false
        });
    }
};

// Corrected getCompany function
export const getCompany = async (req, res) => {
    try {
        const userId = req.id;
        const company = await Company.findOne({ userId });

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company found",
            company,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error",
            success: false
        });
    }
};

// Corrected getCompanyId function
export const getCompanyId = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId); // Fix typo here

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }

        return res.status(200).json({
            company,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error",
            success: false
        });
    }
};

// Corrected updateCompany function
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body; // Fix typo in 'description'
        const file = req.file; // Assuming file handling is done properly
        // cloudinary implementation if needed
        const updateData = { name, description, website, location };

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false // Fix success message
            });
        }

        return res.status(200).json({
            message: "Company Information Updated.",
            success: true,
            company // Return the updated company
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error",
            success: false
        });
    }
};
