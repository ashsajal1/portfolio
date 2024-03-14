import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-2 h-[60px] border'>
        <div>Sajal</div>
        <div className='flex items-center justify-between gap-2'>
            <div>Twitter</div>
            <div>Github</div>
        </div>
    </nav>
  )
}
