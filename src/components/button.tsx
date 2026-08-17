import React, { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'light';

const variants: Record<Variant, string> = {
    primary: 'bg-gradient-to-br from-primary to-secondary text-slate-50 hover:to-secondaryHigh',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-slate-50',
    light: 'bg-slate-50 text-primary hover:bg-white',
};

export default function Button({ label, icon, onClick, className, variant = 'primary' }: { label: string, icon?: ReactNode, onClick?: () => void, className?: string, variant?: Variant }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`p-2 rounded-md select-none flex items-center justify-center gap-2 ${variants[variant]} transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 ${className ?? ''}`}
        >
            {icon && icon}
            <span>{label}</span>
        </button>
    )
}
