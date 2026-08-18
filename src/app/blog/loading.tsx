import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8">
      <div className="text-center mb-12">
        <div className="h-8 w-64 mx-auto rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        <div className="h-4 w-80 mx-auto mt-3 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        <div className="h-1 w-24 mx-auto mt-4 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-secondaryLow/50 dark:border-secondaryLow/20 bg-white/50 dark:bg-slate-900/50 p-6 shadow-sm"
          >
            <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            <div className="h-6 w-3/4 mt-3 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            <div className="h-4 w-full mt-3 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            <div className="h-4 w-5/6 mt-2 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            <div className="flex gap-2 mt-5">
              <div className="h-6 w-16 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
              <div className="h-6 w-16 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
