'use client';

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

export default function NavLink({ children, href="", className=""}) {
    const pathname = usePathname();
    const isActive = (path) => path === pathname;
    return (
        <Link
            className={
                "text-xs uppercase py-3 font-bold block " +
                (isActive(href)
                ? "border-red-500 text-blue-500 hover:text-blue-600 "
                : "text-slate-700 hover:text-slate-500 ")
                + className
            }
            href={href}

        >
            {children}
        </Link>
    )
}
