import React from 'react'

export default function Blob() {
  return (
    <div className='pointer-events-none absolute -z-10 inset-0 overflow-hidden'>
      <div className='absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 blur-3xl animate-pulse' />
      <div className='absolute -bottom-24 -right-16 h-[260px] w-[260px] rounded-full bg-gradient-to-br from-secondary to-primary opacity-25 blur-3xl animate-pulse' />
    </div>
  )
}