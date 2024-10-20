import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDescription = () => {
    const isApplied = false;
    return (
        <div className='max-w-7xl mx-auto my-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Frontend Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className='bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded-md' variant="ghost">12 Position</Badge>
                        <Badge className='bg-red-100 text-[#f83002] font-bold px-2 py-1 rounded-md' variant="ghost">Part Time</Badge>
                        <Badge className='bg-purple-100 text-[#7209b7] font-bold px-2 py-1 rounded-md' variant="ghost">24LPA</Badge>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <Button disabled={isApplied}
                        className={`rounded-lg ${isApplied ? 'bg-gray-600' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </div>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>   Role:<span className='pl-4 font-normal text-gray-800'> Fontend Developer</span></h1>
                <h1 className='font-bold my-1'>   Location:<span className='pl-4 font-normal text-gray-800'>Hyderabad</span></h1>
                <h1 className='font-bold my-1'>   Description:<span className='pl-4 font-normal text-gray-800'>Lorem epsum,dolor sit amet consectur adpicsdkdfd parsentium</span></h1>
                <h1 className='font-bold my-1'>   Experience:<span className='pl-4 font-normal text-gray-800'>2 Yrs</span></h1>
                <h1 className='font-bold my-1'>   Salary:<span className='pl-4 font-normal text-gray-800'>12 Lpa</span></h1>
                <h1 className='font-bold my-1'>   Total Applicants:<span className='pl-4 font-normal text-gray-800'>4</span></h1>
                <h1 className='font-bold my-1'>   Posted Date:<span className='pl-4 font-normal text-gray-800'>17-07-2024</span></h1>
            </div>
        </div>
    )
}

export default JobDescription
