import express from "express";
import isAuthenticated from "../middlewares/isAuthenticate.js"; // Ensure middleware exists
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
// import { singleUpload } from "../middlewares/multer.js"; // Corrected "mutler" to "multer"

// Create a new express router
const router = express.Router();

router.route("apply/:id").get(isAuthenticated,applyJob);
router.route("/get").get(isAuthenticated,getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated,getApplicants);
router.route("/status/:id/update").post(isAuthenticated,updateStatus)
export default router;
