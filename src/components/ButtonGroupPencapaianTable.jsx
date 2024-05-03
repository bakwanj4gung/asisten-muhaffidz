'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function ButtonGroupPencapaianTable({ value="", className=""  , href=""}) {
    const pathname = usePathname();
    const isActive = (path) => path === pathname;

    return (
        <>
            <Link href={href}>
                <button 
                    type="button" 
                    className={"px-4 py-2 text-sm text-gray-900 font-medium border border-gray-600 shadow-md transition-all duration-300 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white " 
                        + className
                        + (isActive(href)
                        ? "bg-stone-800 text-white " 
                        : " bg-transparent")
                }>
                    {value}
                </button>
            </Link>
        </>
    )
}
