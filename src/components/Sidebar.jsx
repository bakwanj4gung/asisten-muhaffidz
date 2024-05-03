'use client';

import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import IconSidebarActive from './IconSidebarActive'
import MiniMenu from './MiniMenu';

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");

    return (
        <nav className="relative md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between md:w-64 z-10 py-4">
            <div className="md:flex-col md:items-stretch md:h-5/6 md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-6">
                {/* Toggler */}
                <button
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    type="button"
                    onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                >
                    <i className="fas fa-bars"></i>
                </button>

                {/* Brand */}
                <Link 
                    href="/dashboard"
                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                >
                    Asisten Muhaffidz
                </Link>

                {/* User */}
                <ul className="md:hidden items-center flex flex-wrap list-none">
                    <li className="inline-block relative">
                        {/* <NotificationDropdown /> */}
                    </li>
                    <li className="inline-block relative">
                        {/* <UserDropdown /> */}
                    </li>
                </ul>
                {/* Collapse */}
                <div
                    className={
                    "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto h-auto items-center flex-1 rounded " + 
                    collapseShow 
                    }
                >
                    {/* Collapse header */}
                    <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
                        <div className="flex flex-wrap">
                            <div className="w-6/12">
                                <Link 
                                    href="/dashboard"
                                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                >
                                Asisten Muhaffidz
                                </Link>
                            </div>
                            <div className="w-6/12 flex justify-end">
                                <button
                                    type="button"
                                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                    onClick={() => setCollapseShow("hidden")}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Form */}
                    <form className="mt-6 mb-4 md:hidden">
                        <div className="mb-3 pt-0">
                            <input
                            type="text"
                            placeholder="Search"
                            className="px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                            />
                        </div>
                    </form>

                    {/* Divider */}
                    <hr className="mt-7 mb-4 md:mt-4 md:mb-9 md:min-w-full" />
                    {/* Navigation */}

                    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                        <li className="items-center md:min-h-full">
                            <NavLink href="/dashboard">
                                <IconSidebarActive href="/dashboard" className="fas fa-tv mr-2" />
                                Dashboard
                            </NavLink>
                            <NavLink href="/dashboard/halaqoh">
                                <IconSidebarActive href="/dashboard/halaqoh" className="fas fa-user-group mr-2" />
                                Halaqoh
                            </NavLink>
                            <NavLink href="/dashboard/santri">
                                <IconSidebarActive href="/dashboard/santri" className="fas fa-graduation-cap mr-2" />
                                Santri
                            </NavLink>
                            <NavLink href="/pencapaian">
                                <IconSidebarActive href="/pencapaian" className="fas fa-pen-to-square mr-2" />
                                Pencapaian
                            </NavLink>
                            <MiniMenu className='w-full rounded-xl mt-4 -ms-2 md:hidden'/>
                        </li>
                    </ul>
                </div>
            </div>
            <MiniMenu className='w-full rounded-xl px-2 mt-14 hidden md:flex'/>
        </nav>
    )
}
