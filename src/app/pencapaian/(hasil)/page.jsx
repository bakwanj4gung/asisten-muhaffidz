'use client';

import React from 'react'
import ButtonGroupPencapaianTable from '@/components/ButtonGroupPencapaianTable';
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import Image from 'next/image';


export default function MainPencapaianTable() {

    const text = "Muhammad Faqih Ali bin Nasir Majid"
    
    return (
        <div className="block w-full overflow-x-auto">
            <form className="md:flex absolute top-6 left-7 hidden flex-row flex-wrap items-center mr-3 w-1/4">
                <div className="relative flex w-full flex-wrap items-stretch">
                    <span className="z-10 h-full leading-snug font-normal text-center text-slate-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <i className="fas fa-search"></i>
                    </span>
                    <input
                        type="text"
                        placeholder="Masukkan Nama"
                        className="border-0 px-3 py-3 placeholder-slate-400 text-slate-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    />
                </div>
            </form>
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                            Nama
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                            Halaqoh
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                            Umur
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                            Terakhir Tasmi
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                            Ayat Terakhir
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                            <Image
                                src="/img/bootstrap.jpg"
                                className="h-12 w-12 bg-white rounded-full border"
                                alt="..."
                                width={40}
                                height={40}
                            ></Image>{" "}
                            <span className="ml-3 font-bold text-slate-600">
                                {text.length > 22 ? text.slice(0, 24) + '...' : text}
                            </span>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center max-w-36 text-xs p-4">
                            Umar bin Khattab
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs max-w-16 p-4">
                            15
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center max-w-36 text-xs p-4">
                            12 September 2023
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs max-w-36 p-4">
                            Al-Baqarah:299
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-right">
                        {/* <TableDropdown /> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
