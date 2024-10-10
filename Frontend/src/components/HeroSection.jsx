import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 px py- rounded-full bg-gray-100 text-[#F83802] font-medium'>No. 1 Job Hunt Website</span>
            </div>
            <h1 className='text-5xl font-bold'>Search,Apply & <br /> Get Your <span className='text-[#6A38c2]'>Dream Jobs</span></h1>
            <pp>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsum totam.</pp>
            <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                <input
                    type="text"
                    placeholder='Find your dream jobs'
                    className='outline-none border-none w-full'
                />
                <Button className='rounded-r-full bg-[#6A38c2]'>
                    <Search className='h-5 w-5'></Search>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection