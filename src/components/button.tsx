import React, { ReactNode } from 'react'

export default function Button({ label, icon, onClick }: { label: string, icon?: ReactNode, onClick?: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className='p-2 rounded-md select-none text-slate-50 flex items-center justify-between gap-2 bg-gradient-to-br from-primary to-secondary hover:to-secondaryHigh transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2'
        >
            {icon && icon}
            <span>{label}</span>
        </button>
    )
}