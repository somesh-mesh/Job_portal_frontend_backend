import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import  { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form action="" className="w-1/2 border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-cl mb-2">Sign up</h1>
          <div className="my-2">
            <Label>Full name</Label>
            <Input type="text" placeholder="Full name" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="text" placeholder="abc@gmail.com" />
          </div>
          <div className="my-2">
            <Label>Phone number</Label>
            <Input type="number" placeholder="Phone number" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="Password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup
              defaultValue="Student"
              className="flex items-center space-x-2"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                ></input>
                <Label htmlFor="Student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  className="cursor-pointer"
                ></input>
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <input accept="image/*" type="file" className="cursor-pointer" />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
             Signup
          </Button>
          <span>Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>

        </form>
      </div>
    </div>
  );
};

export default Signup;
