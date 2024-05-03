import CardSantri from '@/components/CardSantri'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import React from 'react'

export default function MainHalaqohPage() {
    return (
        <>
            <NavBar back={true} />
            <div className="px-4 h-full md:px-10 mx-auto w-full">

                <div className="px-4 md:px-10 mx-auto w-full">
                    <div>
                    {/* Card stats */}
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                <CardSantri halaqohName="Utsman bin Affan" santriName="Jarwo" lastDateSetoran="21 Juni 2003" />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div className="flex-auto p-4">
                                        <div className="flex flex-wrap">
                                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                    Halaqoh
                                                </h5>
                                                <span className="font-semibold text-xl text-slate-700">
                                                    Utsman bin Affan
                                                </span>
                                            </div>
                                            <div className="relative w-auto pl-4 flex-initial">
                                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full">
                                                    <i className="fas fa-chart-pie text-slate-500" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-400 mt-4">
                                            <span className="text-emerald-500 mr-1">
                                            5
                                            </span>
                                            <span className="whitespace-nowrap">Santri</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div className="flex-auto p-4">
                                        <div className="flex flex-wrap">
                                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                    Halaqoh
                                                </h5>
                                                <span className="font-semibold text-xl text-slate-700">
                                                    Utsman bin Affan
                                                </span>
                                            </div>
                                            <div className="relative w-auto pl-4 flex-initial">
                                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full">
                                                    <i className="fas fa-chart-pie text-slate-500" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-400 mt-4">
                                            <span className="text-emerald-500 mr-1">
                                            5
                                            </span>
                                            <span className="whitespace-nowrap">Santri</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div className="flex-auto p-4">
                                        <div className="flex flex-wrap">
                                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                    Halaqoh
                                                </h5>
                                                <span className="font-semibold text-xl text-slate-700">
                                                    Utsman bin Affan
                                                </span>
                                            </div>
                                            <div className="relative w-auto pl-4 flex-initial">
                                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full">
                                                    <i className="fas fa-chart-pie text-slate-500" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-400 mt-4">
                                            <span className="text-emerald-500 mr-1">
                                            5
                                            </span>
                                            <span className="whitespace-nowrap">Santri</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div className="flex-auto p-4">
                                        <div className="flex flex-wrap">
                                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 className="text-slate-400 uppercase font-bold text-xs">
                                                    Halaqoh
                                                </h5>
                                                <span className="font-semibold text-xl text-slate-700">
                                                    Utsman bin Affan
                                                </span>
                                            </div>
                                            <div className="relative w-auto pl-4 flex-initial">
                                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full">
                                                    <i className="fas fa-chart-pie text-slate-500" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-400 mt-4">
                                            <span className="text-emerald-500 mr-1">
                                            5
                                            </span>
                                            <span className="whitespace-nowrap">Santri</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
