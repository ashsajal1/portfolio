import React, { ReactNode } from 'react'

export default function Button({ label, icon }: { label: string, icon?: ReactNode }) {
    return (
        <div className='p-2 rounded-md text-slate-50 flex items-center justify-between gap-2 bg-gradient-to-br from-primary to-secondary'>
            {icon && icon}
            <span>{label}</span>
        </div>
    )
}
