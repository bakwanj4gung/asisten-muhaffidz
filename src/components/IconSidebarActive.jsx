'use client';

import { usePathname } from 'next/navigation'
import React from 'react'

export default function IconSidebarActive({ className="",  children, href=""  }) {
    const pathname = usePathname();
    const isActive = (path) => path === pathname;
    return (
        <i className={
            className + 
            (isActive(href) ? " text-slate-500 border-slate-500" : " text-slate-300 border-slate-300")}>
            {children}
        </i>
    )
}
