import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="bg-white px-4"> {/* Added horizontal padding here */}
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4"> {/* Added padding for the inner container */}
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83882]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-4"> {/* Fixed missing gap value */}
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          <div className="ml-4"> {/* Added left margin to create space between elements */}
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="p-4 bg-white shadow-md rounded-lg">
                <div>
                  <h4 className="text-lg font-medium">Popover Title</h4>
                  <p className="text-sm text-gray-600">
                    This is some content inside the popover. You can add any
                    additional information here.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
