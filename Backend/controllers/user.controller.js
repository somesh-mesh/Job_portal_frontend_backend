import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User Registration
export const register = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password, role } = req.body;

        // Check if required fields are provided
        if (!fullName || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Please provide all required fields.",
                success: false
            });
        }

        // Check if user already exists with the same email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "A user with this email already exists.",
                success: false
            });
        }

        // Hash the user's password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user and save to the database
        const newUser = await User.create({
            fullName,  // Changed to match schema
            email,
            phoneNumber: phoneNumber.toString(),  // Ensure phoneNumber is stored as a string
            password: hashedPassword,
            role,
        });

        return res.status(201).json({
            message: "User registered successfully.",
            success: true,
            user: { fullName, email, phoneNumber, role } // Avoid returning password
        });

    } catch (error) {
        console.error(`fromConsoleLog ${error}`);
       return res.status(500).json({
            message: "An error occurred during registration.",
            success: false
        });
    }
};

// User Login
export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Check for missing fields
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Email, password, and role are required.",
                success: false,
            });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password.",
                success: false,
            });
        }

        // Check if password matches
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            return res.status(400).json({
                message: "Invalid email or password.",
                success: false,
            });
        }

        // Check if the role matches
        if (role !== user.role) {
            return res.status(400).json({
                message: "The account does not match the specified role.",
                success: false,
            });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

        // Return the token in a cookie and user data (excluding sensitive info)
        const userData = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            role: user.role,
            profile : user.profile
        };

        return res.status(200)
            .cookie('token', token, {
                maxAge: 24 * 60 * 60 * 1000, // 1 day
                httpOnly: true,
                sameSite: 'strict',
            })
            .json({
                message: `Welcome back, ${user.fullname}!`,
                success: true,
                user: userData
            });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "An error occurred while logging in.",
            success: false,
        });
    }
};

// User Logout
export const logout = async (req, res) => {
    try {
        return res.status(200)
            .cookie("token", "", {
                maxAge: 0,
                path: '/', 
            })
            .json({
                message: "Logged out successfully.",
                success: true
            });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error occurred during logout.",
            success: false
        });
    }
};

// Update User Profile
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const userId = req.user.id; // Assumes req.user is populated by authentication middleware

        // if (!fullname || !email || !phoneNumber || !bio || !skills) {
        //     return res.status(400).json({
        //         message: "All fields must be provided.",
        //         success: false
        //     });
        // }

        // Process skills (assuming comma-separated string)
       let skillsArray;
        if(skillsArray){
            skillsArray = skills.split(",").map(skill => skill.trim());
        }

        // Find and update user
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $set: {
                    fullname,
                    email,
                    phoneNumber,
                    "profile.bio": bio,
                    "profile.skills": skillsArray,
                },
            },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Profile updated successfully.",
            success: true,
            user: updatedUser
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error updating profile.",
            success: false
        });
    }
};
