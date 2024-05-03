import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardSantri({ halaqohName="", santriName="", lastSetoran="", santriPic="", lastDateSetoran="" }) {
    return (
        <div className="relative flex flex-col max-h-32 min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg group trasition-all duration-300 hover:scale-110">
            <Link href={`/halaqoh/santri`}>
                <div className="flex-auto p-4">
                    {/* foto */}
                    <div className="absolute right-3 top-3 w-auto pl-4 flex-initial">
                        <div className={"text-white text-center inline-flex items-center justify-center shadow-lg rounded-full " + (santriPic ? "w-20 h-20" : "w-14 h-14")}>
                            {santriPic ? 
                                <Image src={santriPic} width={200} height={200} className="border-2 rounded-full" alt={`Foto ${santriName}`} title={`Foto ${santriName}`} /> 
                                : <i className="fas fa-user text-slate-500" />
                            }
                        </div>
                    </div>
                    {/* nama halaqoh & santri */}
                    <div className="w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-slate-400 uppercase font-bold text-xs">
                            {halaqohName.length > 25 ? halaqohName.slice(0, 25) + '..' : halaqohName}
                            {/* {halaqohName} */}
                        </h5>
                        <span className="font-semibold text-xl text-slate-700" title={santriName}>
                            {santriName.length > 15 ? santriName.slice(0, 15) + '..' : santriName}
                        </span>
                    </div>
                    <div className="mt-2">
                        <p className="text-sm text-blueGray-400">
                            <span className="whitespace-nowrap">Ayat terakhir: </span>
                            <span className={"text-emerald-500 mr-1 " + (lastSetoran ? "" : "text-red-500")}>
                                {lastSetoran ? lastSetoran : "--"}
                            </span>
                        </p>
                        <p className="text-sm text-blueGray-400">
                            <span className="whitespace-nowrap">Terakhir setoran: </span>
                            <span className={"text-emerald-500 mr-1 " + (lastDateSetoran ? "" : "text-red-500")}>
                                {lastDateSetoran ? lastDateSetoran : "--"}
                            </span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
