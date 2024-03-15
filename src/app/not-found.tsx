import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='w-[200px] h-[200px]'>
                <Image className='object-cover' width={200} height={200} src="/not-found-image.png" alt="Not Found" />
            </div>
            <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="text-blue-500 hover:underline">Go back to home</Link>
        </div>
    );
}
