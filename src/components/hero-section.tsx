import React from 'react'
import Button from './button'
import { CiPhone } from "react-icons/ci";
import { FiCheckCircle } from "react-icons/fi";
import Blob from './blob';
import Image from 'next/image'
import Link from 'next/link';

const stats = [
    { value: "5+", label: "Projects Delivered" },
    { value: "4+", label: "Technologies Mastered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24h", label: "Response Time" },
];

const trustPoints = [
    "On-time delivery",
    "Transparent pricing",
    "Post-launch support",
];

export default function HeroSection() {
    return (
        <section className='relative w-full overflow-hidden'>
            <div className='flex flex-col sm:flex-row items-center p-8 sm:p-12 justify-between w-full gap-12 sm:gap-0'>
                <div className='order-2 sm:order-1 md:w-1/2 flex flex-col items-center sm:items-start'>
                    <span className='mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary'>
                        <span className='h-2 w-2 rounded-full bg-green-500' />
                        Available for new projects
                    </span>

                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent text-center sm:text-start leading-tight'>
                        Web Solutions That Grow Your Business
                    </h1>

                    <p className='py-4 text-center sm:text-start text-slate-600 dark:text-slate-400 max-w-md'>
                        From high-converting websites to AI-powered applications — I build fast, reliable digital products that save you time, reduce costs, and drive revenue.
                    </p>

                    <div className='flex items-center gap-2 mt-6 flex-wrap justify-center sm:justify-start'>
                        <Link href='mailto:ashsajal@yahoo.com'>
                            <Button label='Book a Free Consultation' icon={<CiPhone />}></Button>
                        </Link>
                        <Link href='/projects'>
                            <Button label='View My Work' icon={<FiCheckCircle />} variant='outline' />
                        </Link>
                    </div>

                    <div className='flex flex-wrap items-center gap-x-4 gap-y-1 mt-5 text-xs text-slate-500 dark:text-slate-400'>
                        {trustPoints.map((point) => (
                            <span key={point} className='inline-flex items-center gap-1'>
                                <FiCheckCircle className='text-secondary' />
                                {point}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='hidden order-1 sm:order-2 sm:flex items-center flex-col justify-center w-full sm:w-1/2'>
                    <div className='relative w-full max-w-[420px] rounded-2xl border border-primary/20 shadow-2xl shadow-primary/20 overflow-hidden animate-float'>
                        <Image
                            width={400}
                            height={200}
                            src='/webapp/webapp.png'
                            alt='Web app screenshot'
                            className='object-cover w-full h-auto'
                            priority
                        />
                    </div>
                </div>

                <Blob />
            </div>

            <div className='container w-full mx-auto px-4 sm:px-12'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
                    {stats.map(({ value, label }) => (
                        <div
                            key={label}
                            className='rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-4 py-5 text-center shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300'
                        >
                            <p className='text-2xl sm:text-3xl font-extrabold gradient-text'>{value}</p>
                            <p className='text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1'>{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
