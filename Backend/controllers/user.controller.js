import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        
        // Check if any required fields are missing
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        // Check if a user with the given email already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists with this email.",
                success: false
            });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
        });

        
    return res.status(201).json({
            message: "User registered successfully.",
            success: true,
            user: newUser,  // Optionally, you can return the created user details (excluding the password)
        });

    } catch (error) {
        // Log the error and return an error response
        console.error(error);
        return res.status(500).json({
            message: "An error occurred during registration.",
            success: false
        });
    }
};


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

        // Check if the user exists in the database
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            });
        }

        // Verify the password
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            });
        }

        // Check if the role matches
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with the provided role.",
                success: false,
            });
        }

        // Create the token payload
        const tokenData = {
            userId: user._id,
        };

        // Generate the JWT token (Corrected the expiry time to '1d')
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        // Send user data (without password) in response
        const userData = {
            _id: user._id,
            fullName: user.fullname,
            email: user.email,
            role: user.role,
            profile: user.profile,
        };

        // Set the cookie and return the response
        return res.status(200)
            .cookie('token', token, {
                maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
                httpOnly: true,
                sameSite: 'strict',
            })
            .json({
                message: `Welcome back, ${user.fullName}`, // Use correct template literal syntax
                success: true,
                user: userData, // Optionally send user data
            });
    } catch (error) {
        // Catch any error and return a server error response
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({
            message: "An error occurred while processing your request.",
            success: false,
        });
    }
};

export const logout = async (req,res) =>{
    try{
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message : "Logged Out Successfully.",
            success:true
        })
    }catch(error){
        console.log(error);
    }
}
