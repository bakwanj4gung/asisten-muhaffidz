import Link from 'next/link'
import React from 'react'
import BackButton from './BackButton'

export default function NavBar({ headName="Halaman Utama", home=false, back=false }) {
    return (
        <>
            {/* Navbar */}
                <nav className={"w-full bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center px-10 md:px-10 p-4 my-1 " + (home||back === true ? "" : "py-9 my-0")}>
                    <div className="w-full items-center flex justify-between md:flex-nowrap flex-wrap">
                        {/* Brand */}
                        <span
                            className="text-white text-sm uppercase font-semibold"
                            // onClick={(e) => e.preventDefault()}
                        >
                            {headName}
                        </span>
                        {/* Home */}
                        <div className={"flex-row flex-wrap items-center justify-between lg:ml-auto mr-3 " + (home === true ? "flex" : "hidden")}>
                            <Link href="/dashboard">
                                <button className="flex items-center gap-2 bg-gray-700 text-white active:bg-slate-700 font-bold uppercase text-sm px-6 py-3 rounded shadow transition-all duration-150 hover:shadow-lg hover:bg-slate-600 outline-none focus:outline-none mr-1 mb-1 ease-linear" type="button">
                                    <i className='fas fa-home' />
                                    <span className='hidden lg:inline-block'>Kembali ke Halaman Utama</span>
                                </button>
                            </Link>
                        </div>
                        {/* Back */}
                        <div className={"flex-row flex-wrap items-center justify-between lg:ml-auto mr-3 " + (back === true ? "flex" : "hidden")}>
                            <BackButton />
                        </div>
                    </div>
                </nav>
            {/* End Navbar */}
        </>
    )
}
