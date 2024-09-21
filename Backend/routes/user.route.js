import express from "express";
import { login, register, updateProfile, logout } from "../controllers/user.controller.js"; // Import the logout function
import isAuthenticated from "../middlewares/isAuthenticate.js";

const router = express.Router();

// Use router.post() directly
router.post("/register", register);
router.post("/login", login);
router.post("/profile/update", isAuthenticated, updateProfile);

// Add the logout route
router.post("/logout", isAuthenticated, logout); // Require authentication to log out

export default router;
