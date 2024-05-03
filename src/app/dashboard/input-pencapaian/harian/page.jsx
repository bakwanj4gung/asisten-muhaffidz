import ButtonSubmit from '@/components/ButtonSubmit'
import { Datepicker } from 'flowbite-react'
import React from 'react'

export default function InputPencapaianHarianPage() {
    return (
        <>
        <p className="text-white text-sm uppercase font-semibold absolute top-7.5 lg:top-8.5 left-45">Harian</p>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100">
            <div className="flex flex-col gap-4 rounded-t bg-white mb-0 px-6 py-6">
                <form className="flex flex-row flex-wrap items-center mr-3 md:w-1/4">
                    <div className="relative flex w-full flex-wrap items-stretch">
                        <span className="z-10 h-full leading-snug font-normal text-center text-slate-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                            <i className="fas fa-search"></i>
                        </span>
                        <input
                            type="text"
                            placeholder="Pilih Santri"
                            className="border-0 px-3 py-3 placeholder-slate-400 text-slate-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                        />
                    </div>
                </form>
                <div className='flex items-center'>
                    <h6 className="text-slate-700 text-xl font-bold">Jarwo</h6>
                </div>
            </div>
            <div className="flex-auto border-white border-8 px-4 lg:px-10 py-6">
                <form>
                    <div className="flex flex-wrap">
                        {/* Tanggal */}
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Tanggal
                            </label>
                            {/* <input
                                type="date"
                                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue="lucky.jesse"
                            /> */}
                            <Datepicker />
                            </div>
                        </div>
                        {/* Tasmi' */}
                        <div className="w-full lg:w-6/12">
                            <label
                                className="block uppercase text-slate-600 text-xs font-bold mb-2 px-4"
                                htmlFor="grid-password"
                            >
                                {`Tasmi'`}
                            </label>
                            <div className="flex items-center gap-2">
                                <div className="w-full ps-4 pe-1 md:px-4 relative mb-3">
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        placeholder="Al-Baqarah:1"
                                    />
                                </div>
                                <div className='mb-3'>
                                    <p className="text-3xl text-slate-500">-</p>
                                </div>
                                <div className="w-full pe-4 ps-1 md:px-4 relative mb-3">
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        placeholder="Al-Baqarah:30"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Jumlah Halaman */}
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Total Halaman Setoran
                            </label>
                            <input
                                type="number"
                                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue=""
                                placeholder='1.5'
                            />
                            </div>
                        </div>
                        {/* Murojaah */}
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Murojaah
                            </label>
                            <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue=""
                                placeholder='Hal. 1 - 30'
                            />
                            </div>
                        </div>
                        {/* Catatan */}
                        <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Catatan
                            </label>
                            <textarea
                                type="text"
                                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                rows="2"
                                defaultValue=""
                                placeholder='Tajwidnya sudah bagus tapi masih belum lancar.'
                            ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-6 mx-4 md:w-1/4">
                        <ButtonSubmit value={'Simpan'} />
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}
