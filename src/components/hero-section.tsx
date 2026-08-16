import React from 'react'
import Button from './button'
import { CiPhone, CiWavePulse1 } from "react-icons/ci";
import Blob from './blob';
import Image from 'next/image'
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className='relative flex flex-col sm:flex-row items-center p-8 sm:p-12 justify-between w-full gap-12 sm:gap-0 overflow-hidden'>
            <div className='order-2 sm:order-1 md:w-1/2 flex flex-col items-center sm:items-start'>
                <span className='mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary'>
                    <span className='h-2 w-2 rounded-full bg-green-500' />
                    Available for work
                </span>

                <h3 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent text-center sm:text-start leading-tight'>
                    Building Projects with React, TypeScript, and Next.js
                </h3>

                <p className='py-4 text-center sm:text-start text-slate-600 dark:text-slate-400 max-w-md'>
                    Exploring Advanced Technologies to Enhance and Simplify Everyday Life
                </p>

                <div className='flex items-center gap-2 mt-6'>
                    <Link href='mailto:ashsajal@yahoo.com'>
                        <Button label='Contact' icon={<CiPhone />}></Button>
                    </Link>
                    <Link href='/projects'>
                        <Button label='Explore Projects' icon={<CiWavePulse1 />} />
                    </Link>
                </div>
            </div>

            <div className='order-1 sm:order-2 flex items-center flex-col justify-center'>
                <div className='relative rounded-2xl border border-primary/20 shadow-2xl shadow-primary/20 overflow-hidden animate-float'>
                    <Image
                        width={400}
                        height={200}
                        src='/webapp/webapp.png'
                        alt='Web app screenshot'
                        className='object-cover'
                        priority
                    />
                </div>
            </div>

            <Blob />
        </section>
    )
}