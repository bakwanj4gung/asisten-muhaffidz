import Link from 'next/link'
import React from 'react'

export default function CardHalaqoh({ halaqohName, santriCount, color}) {
    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded xl:mb-0 shadow-lg trasition-all duration-300 hover:scale-110">
            <Link href={`/halaqoh`}>
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-slate-400 uppercase font-bold text-xs">
                                Halaqoh
                            </h5>
                            <span className="font-semibold text-xl text-slate-700 truncate">
                                {halaqohName}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-sm text-slate-400 ">
                            <span className={`mr-1 ${santriCount <= 9 ? 'text-emerald-500' : 'text-red-500'}`}>
                            {santriCount}
                            </span>
                            <span className="whitespace-nowrap">Santri</span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
