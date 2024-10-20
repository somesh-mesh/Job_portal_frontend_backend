import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDescription = () => {
    const isApplied = false;
    return (
        <div className='max-w-7xl mx-auto my-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Title</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className='bg-blue-100 text-blue-700 font-bold px-2 py-1 rounded-md' variant="ghost">12 Position</Badge>
                        <Badge className='bg-red-100 text-[#f83002] font-bold px-2 py-1 rounded-md' variant="ghost">Part Time</Badge>
                        <Badge className='bg-purple-100 text-[#7209b7] font-bold px-2 py-1 rounded-md' variant="ghost">24LPA</Badge>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <Button className={`rounded-lg ${isApplied ? 'bg-gray-600' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default JobDescription
