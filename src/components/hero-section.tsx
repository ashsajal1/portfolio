import React from 'react'
import Button from './button'
import { FiSearch, FiCheckCircle } from "react-icons/fi";
import Blob from './blob';
import Link from 'next/link';

const stats = [
    { value: "7", label: "Audit Areas" },
    { value: "10", label: "Checkpoints" },
    { value: "4", label: "Step Process" },
    { value: "100%", label: "Jargon-Free" },
];

const trustPoints = [
    "Prioritized by impact",
    "Fixed in your codebase",
    "Re-tested & verified",
];

const sampleFindings = [
    { issue: "Largest Contentful Paint 4.2s", severity: "High", dot: "bg-red-500" },
    { issue: "Unoptimized hero image (2.1 MB)", severity: "High", dot: "bg-red-500" },
    { issue: "Missing meta descriptions", severity: "Medium", dot: "bg-amber-500" },
    { issue: "Low-contrast buttons", severity: "Medium", dot: "bg-amber-500" },
    { issue: "No form success feedback", severity: "Low", dot: "bg-green-500" },
];

export default function HeroSection() {
    return (
        <section className='relative w-full overflow-hidden'>
            <div className='flex flex-col sm:flex-row items-center p-8 sm:p-12 justify-between w-full gap-12 sm:gap-0'>
                <div className='order-2 sm:order-1 md:w-1/2 flex flex-col items-center sm:items-start'>
                    <span className='mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary'>
                        <span className='h-2 w-2 rounded-full bg-green-500' />
                        Find. Fix. Verify.
                    </span>

                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center sm:text-start leading-tight'>
                        <span className='bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent'>
                            Website Audit &amp; Optimization
                        </span>
                    </h1>

                    <p className='py-4 text-center sm:text-start text-slate-600 dark:text-slate-400 max-w-md'>
                        Your website might look great and still have problems under the hood.
                        I audit across performance, SEO, accessibility, security, mobile
                        experience, technical quality, and UX — then fix what matters and
                        verify it worked.
                    </p>

                    <div className='flex items-center gap-2 mt-6 flex-wrap justify-center sm:justify-start'>
                        <Link href='/audit'>
                            <Button label='Get a Free Website Audit' icon={<FiSearch />}></Button>
                        </Link>
                        <Link href='/#process'>
                            <Button label='See How It Works' icon={<FiCheckCircle />} variant='outline' />
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

                <div className='order-1 sm:order-2 flex items-center flex-col justify-center w-full sm:w-1/2'>
                    <div className='relative w-full max-w-[420px] rounded-2xl border border-primary/20 bg-white dark:bg-slate-900 shadow-2xl shadow-primary/20 overflow-hidden animate-float' aria-hidden>
                        <div className='flex items-center justify-between px-5 py-3 border-b border-secondaryLow/40 dark:border-secondaryLow/20'>
                            <p className='text-sm font-bold text-slate-800 dark:text-slate-100'>Audit Report</p>
                            <span className='text-xs font-medium text-slate-500 dark:text-slate-400'>yoursite.com</span>
                        </div>
                        <ul className='px-5 py-4 space-y-3'>
                            {sampleFindings.map(({ issue, severity, dot }) => (
                                <li key={issue} className='flex items-center gap-2.5 text-xs'>
                                    <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
                                    <span className='flex-1 text-slate-600 dark:text-slate-400'>{issue}</span>
                                    <span className='font-semibold text-slate-500 dark:text-slate-400'>{severity}</span>
                                </li>
                            ))}
                        </ul>
                        <div className='px-5 py-3 bg-primary/5 dark:bg-secondary/10 border-t border-secondaryLow/40 dark:border-secondaryLow/20'>
                            <p className='inline-flex items-center gap-1.5 text-xs font-semibold text-primary'>
                                <FiCheckCircle />
                                Fixed &amp; verified after implementation
                            </p>
                        </div>
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
