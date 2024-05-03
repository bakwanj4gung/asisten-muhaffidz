import Image from 'next/image'
import React from 'react'

export default function BulananPencapaianTable() {
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
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                            Nama
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                            Halaqoh
                        </th>
                        <th className="ps-6 pe-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                            Bulan
                        </th>
                        <th className="px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                            <div>Jumlah Setoran/</div>
                            <div>Jumlah Murojaah</div>
                        </th>
                        <th className="ps-3 pe-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                            Ayat Terakhir
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-center bg-slate-50 text-slate-500 border-slate-100">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <Image
                            src="/img/bootstrap.jpg"
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="..."
                        ></Image>{" "}
                        <span className="ml-3 font-bold text-slate-600">
                            {text.length > 22 ? text.slice(0, 22) + '...' : text}
                        </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center max-w-32 p-4">
                            Muawiyyah bin Abi Sofyan
                        </td>
                        <td className="border-t-0 ps-6 pe-3 align-middle border-l-0 border-r-0 text-xs text-center max-w-28 p-4">
                            Agustus
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center max-w-36 p-4">
                            <div>20 Lembar/</div>
                            <div>40 Lembar</div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center max-w-32 p-4">
                            Al-Maidah:17
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
