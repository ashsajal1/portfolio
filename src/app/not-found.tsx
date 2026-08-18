import Link from 'next/link';
import React from 'react';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <h1 className="text-[8rem] leading-none font-extrabold gradient-text sm:text-[10rem]">
                404
            </h1>
            <h2 className="text-2xl font-semibold mb-3 text-slate-800 dark:text-slate-100 sm:text-3xl">
                Page not found
            </h2>
            <p className="max-w-md text-lg text-slate-600 dark:text-slate-400 mb-8">
                Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="rounded-lg bg-gradient-to-br from-primary to-secondary px-6 py-2 text-slate-50 font-medium transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
            >
                Go back to home
            </Link>
        </div>
    );
}
