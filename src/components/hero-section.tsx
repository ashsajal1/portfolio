import React from 'react'
import Button from './button'

export default function HeroSection() {
    return (
        <div className='flex items-center p-4 justify-between w-full'>
            <div className='p-12'>
                <h3 className='text-3xl font-extrabold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent'>Building Projects with React, TypeScript, and Next.js</h3>
                <p className='py-2'>Exploring Advanced Technologies to Enhance and Simplify Everyday Life</p>

                <div className='flex items-center gap-2 mt-6'>
                    <Button label='Contact' />
                    <Button label='Explore Projects' />
                </div>
            </div>

            <div className='w-9/12'>
                <p>Some pircture of work</p>
            </div>
        </div>
    )
}
