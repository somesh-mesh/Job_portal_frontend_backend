import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { LogOut, User2 } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const user = false;

  return (
    <div className="bg-white px-4">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83882]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          <div
            className="ml-4"
            onMouseEnter={() => setIsPopoverOpen(true)}
            onMouseLeave={() => setIsPopoverOpen(false)}
          >
            {!user ? (
              <div className="flex items-center gap-2">
                <Button variant="outline">Login</Button>
                <Button className="bg-[#6A38C2] hover:bg-[#6A38C6] text-white">Signup</Button>

              </div>
            ) : (
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <div>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  className="p-4 bg-white shadow-md rounded-lg"
                >
                  {/* Popover Content */}
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Somesh Meshram</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-2  text-gray-600">
                    {/* Corrected class name from `flext` to `flex` */}
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link" className="text-left">
                        View Profile
                      </Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button variant="link" className="text-left">
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
