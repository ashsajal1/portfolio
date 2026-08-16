import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className='w-[200px] h-[200px]'>
                <Image
                    className='object-cover'
                    width={200}
                    height={200}
                    src="/not-found-image.png"
                    alt="Not Found"
                    priority
                />
            </div>
            <h1 className="text-4xl font-bold mb-4 gradient-text">404 - Not Found</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 text-center">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="rounded-lg bg-gradient-to-br from-primary to-secondary px-6 py-2 text-slate-50 font-medium transition-all duration-200 hover:scale-105 active:scale-95"
            >
                Go back to home
            </Link>
        </div>
    );
}