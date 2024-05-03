'use client';

import Link from 'next/link'
import React from 'react'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';

export default function SidebarHalaqoh() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
            <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
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
                    href="/"
                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                >
                    Notus NextJS
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
                    "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + 
                    collapseShow 
                    }
                >
                    {/* Collapse header */}
                    <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
                        <div className="flex flex-wrap">
                            <div className="w-6/12">
                                <Link 
                                    href="/"
                                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                >
                                Notus NextJS
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
                    
                    {/* Heading */}
                    <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        Halaqoh
                    </h6>

                    {/* Navigation */}
                    <div className="md:flex-col md:min-w-full flex flex-col">
                        <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                            <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className={`flex items-center text-sm transition-colors ${
                                open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                            }`}
                            >
                                <span>Utsman bin Affan</span>
                                <i className={`fas fa-angle-down text-sm mt-1 ms-1 ${open === 1 ? "rotate-180 translate-x-0.5 mt-0" : ""} transition-all duration-300`} />
                            </AccordionHeader>
                            <AccordionBody className="pt-2 px-1 text-base font-normal">
                                <ul>
                                    <li className="flex items-center mt-1">
                                        <i className="fas fa-square text-xxs me-2" />
                                        <Link href="/halaqoh/santri" className="text-sm font-semibold hover:text-blue-500">Jarwo</Link>
                                    </li>
                                    <li className="flex items-center mt-1">
                                        <i className="fas fa-square text-xxs me-2" />
                                        <Link href="/" className="text-sm font-semibold hover:text-blue-500">Jarwo</Link>
                                    </li>
                                    <li className="flex items-center  mt-1">
                                        <i className="fas fa-square text-xxs me-2" />
                                        <Link href="/" className="text-sm font-semibold hover:text-blue-500">Jarwo</Link>
                                    </li>
                                </ul>
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>
        </nav>
    )
}
