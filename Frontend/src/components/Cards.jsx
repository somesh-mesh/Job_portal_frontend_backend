import React from 'react'
import { Badge } from './ui/badge';
const Cards = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-whie border-green-100 cursor-pointer'>
            <div>
                <h1>Company Name</h1>
                <p>India</p>
            </div>
            <div>
                <h1>Job Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">
                    12 Position
                </Badge>
                <Badge className={'text-[#f83002] font-bold'} variant="ghost">
                    Part Time
                </Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">
                    24LPA
                </Badge>

            </div>
        </div>

    );
};

export default Cards;


