import express from "express";
import { login, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticate.js";

const router = express.Router();

// Use router.post() directly
router.post("/register", register);
router.post("/login", login);
router.post("/profile/update", isAuthenticated, updateProfile);

export default router;
