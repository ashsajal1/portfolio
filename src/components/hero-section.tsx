import React from 'react'
import Button from './button'
import { CiPhone, CiWavePulse1 } from "react-icons/ci";
import Blob from './blob';
import Image from 'next/image'
import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className='flex flex-col sm:flex-row items-center relative p-12 justify-between w-full gap-12 sm:gap-0'>
            <div className='order-2 sm:order-1 md:w-1/2 flex flex-col items-center sm:items-start'>
                <h3 className='text-3xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent text-center sm:text-start'>Building Projects with React, TypeScript, and Next.js</h3>
                <p className='py-2 text-center sm:text-start'>Exploring Advanced Technologies to Enhance and Simplify Everyday Life</p>

                <div className='flex items-center gap-2 mt-6'>
                    <Button label='Contact' icon={<CiPhone />}></Button>
                    <Link href='/projects'>
                        <Button label='Explore Projects' icon={<CiWavePulse1 />} />
                    </Link>
                </div>
            </div>

            <div className='order-1 sm:order-2 flex items-center flex-col justify-center'>
                <div className=''>
                    <Image width={400} height={200} src='/webapp/webapp.png' alt='Web app screenshot' />
                </div>
            </div>
            <Blob />
        </div>
    )
}
