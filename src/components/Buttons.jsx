import Link from 'next/link'
import React from 'react'

export default function Buttons({ value, goTo }) {
    return (
        <Link href={goTo ? goTo : "/"}>
            <button 
                className="bg-slate-800 active:bg-slate-600 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="button"
            >
                {value}
            </button>
        </Link>
    )
}
