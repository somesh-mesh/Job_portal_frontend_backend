import express from "express";
import isAuthenticated from "../middlewares/isAuthenticate.js"; // Ensure middleware exists
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
// import { singleUpload } from "../middlewares/multer.js"; // Corrected "mutler" to "multer"

// Create a new express router
const router = express.Router();

// Routes for company operations
router.post("/register", isAuthenticated, registerCompany); // Register a company
router.get("/get", isAuthenticated, getCompany); // Get company information for the authenticated user
router.get("/get/:id", isAuthenticated, getCompanyById); // Get company by ID
router.put("/update/:id", isAuthenticated, updateCompany); // Update company information

export default router;
