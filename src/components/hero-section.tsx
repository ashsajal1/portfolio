import React from 'react'
import Button from './button'
import { CiPhone, CiWavePulse1 } from "react-icons/ci";
import Blob from './blob';
import Image from 'next/image'

export default function HeroSection() {
    return (
        <div className='flex flex-col sm:flex-row items-center relative p-12 justify-between w-full'>
            <div className='order-2 sm:order-1'>
                <h3 className='text-3xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent'>Building Projects with React, TypeScript, and Next.js</h3>
                <p className='py-2'>Exploring Advanced Technologies to Enhance and Simplify Everyday Life</p>

                <div className='flex items-center gap-2 mt-6'>
                    <Button label='Contact' icon={<CiPhone />}></Button>
                    <Button label='Explore Projects' icon={<CiWavePulse1 />} />
                </div>
            </div>

            <div className='order-1 sm:order-2'>
                <div className=''>
                    <Image width={400} height={200} src='/webapp/webapp.png' alt='Web app screenshot' />
                </div>
            </div>
            <Blob />
        </div>
    )
}
