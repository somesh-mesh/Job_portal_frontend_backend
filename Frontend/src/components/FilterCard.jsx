import { Label } from '@radix-ui/react-label';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import React from 'react';

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi", "Nagpur", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    }
];

const FilterCard = () => {
    return (
        <div className='w-full bg-white p-3 rounded-medium'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup>
                {
                    filterData.map((data, index) => (
                        <div key={index}>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, subIndex) => (
                                    <div key={subIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                        <RadioGroupItem
                                            id={`${data.filterType}-${item}`}
                                            value={item}
                                            style={{
                                                width: '16px',
                                                height: '16px',
                                                borderRadius: '50%',
                                                border: '2px solid grey',
                                                marginRight: '8px',
                                                appearance: 'none',
                                                display: 'inline-block',
                                                verticalAlign: 'middle',
                                                backgroundColor: 'white',
                                                position: 'relative'
                                            }}
                                        />
                                        <Label htmlFor={`${data.filterType}-${item}`}>{item}</Label>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    );
};

export default FilterCard;
