import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'outline' | 'ghost'; size?: 'sm' | 'md' | 'lg'; }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  return (
    <button ref={ref} className={twMerge(clsx('inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:pointer-events-none', { 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25': variant === 'primary', 'border border-slate-700 bg-transparent text-slate-600 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-white': variant === 'outline', 'text-slate-400 hover:text-white hover:bg-slate-800/50': variant === 'ghost', 'text-sm px-4 py-2': size === 'sm', 'text-base px-6 py-3': size === 'md', 'text-lg px-8 py-4': size === 'lg' }, className))} {...props} />
  );
});
Button.displayName = 'Button';