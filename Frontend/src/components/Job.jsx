import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = () => {
    const navigate = useNavigate();
    const jobId = "dfkdflddlfdldlfdflldfldf"
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            <div className="flex items-center justify-between">
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>
            </div>

            <div className="flex items-center gap-2 my-2">
                <Button variant="outline" size="icon" className="p-0"> {/* Removed excessive padding */}
                    <Avatar className="w-8 h-8"> {/* Ensure avatar has a defined size */}
                        <AvatarImage
                            src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
                            alt="Avatar"
                            className="w-full h-full object-cover rounded-full" // Ensure the image fits within the avatar
                        />
                        <AvatarFallback className="bg-gray-200 text-gray-500">A</AvatarFallback>
                    </Avatar>
                </Button>
                <div className="">
                    <h1 className='font-medium text-lg '>
                        Company Name
                    </h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div className="">
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos mollitia iusto deserunt dolores ducimus placeat, ad sit praesentium, veritatis rerum delectus possimus architecto doloribus magni nihil quia vero maxime odit?</p>
            </div>

            <div className='flex items-center gap-2 mt-4'>
                {/* Badges with better styling */}
                <Badge className='bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded-md' variant="ghost">
                    12 Position
                </Badge>
                <Badge className='bg-red-100 text-[#f83002] font-bold px-2 py-1 rounded-md' variant="ghost">
                    Part Time
                </Badge>
                <Badge className='bg-purple-100 text-[#7209b7] font-bold px-2 py-1 rounded-md' variant="ghost">
                    24LPA
                </Badge>
            </div>
            <div className="flex items-center gap-4 mt-4" >
                <Button onClick={() =>
                    navigate(`/description/${jobId}`)

                } variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save For Later</Button>
            </div>
        </div>
    );
};

export default Job;
