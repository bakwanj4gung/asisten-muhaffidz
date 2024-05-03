'use client';

import ButtonSubmit from '@/components/ButtonSubmit'
import NavBar from '@/components/NavBar'
import Image from 'next/image';
import React from 'react'
import ReactSelect from 'react-select'

const gender = [
    { value: "Laki-laki", label: "Laki-laki" },
    { value: "Perempuan", label: "Perempuan" },
]

export default function InputSantriPage() {
    return (
        <>
            <NavBar headName="Tambah Santri Baru" back={true} />
            <div className='px-4 md:px-16 lg:px-20 mx-auto w-full'>
                <div className="w-full shadow-lg rounded-lg bg-slate-50 py-5">
                    <form className='md:px-5 py-6'>
                        <div className="flex flex-col xl:flex-row w-full items-center justify-between">
                            <div className="w-7/12 md:w-5/12 flex flex-col items-center justify-center">
                                <div>
                                    <Image
                                        src={"https://source.unsplash.com/random/400x400?person-portrait"} 
                                        width={175} height={175} 
                                        className="rounded-3xl m-auto"
                                        alt='profile' 
                                    />
                                </div>
                                <div className="mt-3 md:w-3/4">
                                    <div>
                                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " aria-describedby="file_input_help" type="file" />
                                        <p className="text-center mt-1 text-xs text-gray-500" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap xl:w-7/12">
                                {/* Nama */}
                                <div className="w-full lg:w-1/2 px-4">
                                    <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="nama"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        id="nama"
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        placeholder='Muhammad Faqih Ali'
                                    />
                                    </div>
                                </div>
                                {/* Umur */}
                                <div className="w-full lg:w-1/2 px-4">
                                    <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="umur"
                                    >
                                        Umur
                                    </label>
                                    <input
                                        id="umur"
                                        type="number"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        placeholder='21'
                                    />
                                    </div>
                                </div>
                                {/* Gender */}
                                <div className="w-full lg:w-1/2 px-4">
                                    <div className="relative w-full mb-3">
                                    <label
                                            className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            htmlFor="gender"
                                        >
                                            Gender
                                        </label>
                                        <ReactSelect
                                            className="px-1 py-1 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150"
                                            styles={{ control: (provided, state) => ({
                                                ...provided,
                                                border: '0',
                                            })}}
                                            options={gender}
                                            placeholder="Pilih Gender"
                                        />
                                    </div>
                                </div>
                                {/* Sekolah */}
                                <div className="w-full lg:w-1/2 px-4">
                                    <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="sekolah"
                                    >
                                        Sekolah
                                    </label>
                                    <input
                                        id="sekolah"
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        placeholder='Pesantren Islam Al-Irsyad Tengaran'
                                    />
                                    </div>
                                </div>
                                {/* Alamat */}
                                <div className="w-full px-4">
                                    <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="alamat"
                                    >
                                        Alamat
                                    </label>
                                    <input
                                        id="alamat"
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        placeholder='Jl. Jend. Sudirman No. 1'
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
                        </div>
                        <div className="text-center mt-6 mx-auto xl:ms-auto xl:me-6 w-10/12 md:w-1/4">
                            <ButtonSubmit value={'Simpan'} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
