import React from 'react'
import Button from './button'
import { CiPhone, CiWavePulse1 } from "react-icons/ci";
import Blob from './blob';

export default function HeroSection() {
    return (
        <div className='flex items-center relative p-12 justify-between w-full'>
            <div className=''>
                <h3 className='text-3xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent'>Building Projects with React, TypeScript, and Next.js</h3>
                <p className='py-2'>Exploring Advanced Technologies to Enhance and Simplify Everyday Life</p>

                <div className='flex items-center gap-2 mt-6'>
                    <Button label='Contact' icon={<CiPhone />}></Button>
                    <Button label='Explore Projects' icon={<CiWavePulse1 />} />
                </div>
            </div>

            <div className='w-9/12'>
                <p>Some pircture of work</p>
            </div>
            <Blob />
        </div>
    )
}
