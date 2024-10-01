import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const Signup = () => {
  // Initialize state
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "", // Correct case for "phoneNumber"
    password: "",
    role: "student", // Set default role to "student" if you want it selected initially
    file: "",
  });

  const navigate = useNavigate();

  // Handle text input changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle file changes
  const changeFileHandler = (e) => setInput({ ...input, file: e.target.files?.[0] });

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    // Create a new FormData object to handle file uploads and other form fields
    const formData = new FormData();
    formData.append("fullName", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber); // Corrected field name
    formData.append("password", input.password);
    formData.append("role", input.role);

    // Append the file to formData only if it exists
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      // Send the request to the server
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      // Check if registration was successful
      if (res.data.success) {
        navigate("/login"); // Redirect to login page on success
        toast.success(res.data.message); // Show success message
      }
    } catch (error) {
      // Log the error response and show error toast
      console.error("Signup Error:", error.response?.data);
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      toast.error(errorMessage); // Use toast.error for error messages
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-2">Sign up</h1>

          {/* Full Name Field */}
          <div className="my-2">
            <Label htmlFor="fullname">Full name</Label>
            <Input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Full name"
              value={input.fullname}
              onChange={changeEventHandler}
            />
          </div>

          {/* Email Field */}
          <div className="my-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="abc@gmail.com"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>

          {/* Phone Number Field */}
          <div className="my-2">
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              placeholder="Phone number"
              value={input.phoneNumber}
              onChange={changeEventHandler}
            />
          </div>

          {/* Password Field */}
          <div className="my-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={changeEventHandler}
            />
          </div>

          {/* Role Selection (Radio Group) */}
          <div className="flex items-center justify-between">
            <RadioGroup defaultValue="student" className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="employer"
                  name="role"
                  value="employer"
                  checked={input.role === "employer"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="employer">employer</Label>
              </div>
            </RadioGroup>

            {/* File Upload Field */}
            <div className="flex items-center gap-2">
              <Label htmlFor="file"></Label>
              <input
                id="file"
                accept="image/*"
                type="file"
                className="cursor-pointer"
                onChange={changeFileHandler}
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full my-4">
            Signup
          </Button>

          {/* Login Link */}
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
