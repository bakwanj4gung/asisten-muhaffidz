'use client';

import ButtonSubmit from '@/components/ButtonSubmit';
import { Datepicker } from 'flowbite-react';
import React from 'react'
import Select from 'react-select';

const months = [
    { value: 'Januari', label: 'Januari' },
    { value: 'Februari', label: 'Februari' },
    { value: 'Maret', label: 'Maret' },
    { value: 'April', label: 'April' },
    { value: 'Mei', label: 'Mei' },
    { value: 'Juni', label: 'Juni' },
    { value: 'Juli', label: 'Juli' },
    { value: 'Agustus', label: 'Agustus' },
    { value: 'September', label: 'September' },
    { value: 'Oktober', label: 'Oktober' },
    { value: 'November', label: 'November' },
    { value: 'Desember', label: 'Desember' }
]

const weeks = [
    { value: 'Pertama', label: 'Pertama' },
    { value: 'Kedua', label: 'Kedua' },
    { value: 'Ketiga', label: 'Ketiga' },
    { value: 'Keempat', label: 'Keempat' },
    { value: 'Kelima', label: 'Kelima' }
];

export default function InputPencapaianMingguanPage() {
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: '0',
        }),
    };

    return (
        <>
        <p className="text-white text-sm uppercase font-semibold absolute top-7.5 lg:top-8.5 left-45">Mingguan</p>
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
                        <div className="grid grid-row-2 gap-2 lg:w-6/12">
                            {/* Bulan & Pekan */}
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">                                    
                                    <div className="md:flex items-center gap-2">
                                        <div className="w-full mb-3 md:mb-0 md:pe-4 relative">
                                            <label
                                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            >
                                                Bulan
                                            </label>
                                            <Select
                                                className="px-1 py-1 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150"
                                                styles={customStyles}
                                                options={months}
                                                placeholder="Pilih Bulan"
                                            />
                                        </div>
                                        <div className="w-full md:ps-4 relative">
                                            <label
                                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                            >
                                                Pekan
                                            </label>
                                            <Select
                                                className="px-1 py-1 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150"
                                                styles={customStyles}
                                                options={weeks}
                                                placeholder="Pilih"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Periode */}
                            <div className="w-full">
                                <div className="relative w-full mb-3">
                                    <label
                                    className="block uppercase text-slate-600 text-xs font-bold mb-2 px-4"
                                    >
                                        Periode
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <div className="w-full ps-4 pe-1 md:px-4 relative mb-3">
                                            <Datepicker className="shado rounded-lg"/>
                                        </div>
                                        <div className='mb-3'>
                                            <p className="text-3xl text-slate-500">-</p>
                                        </div>
                                        <div className="w-full pe-4 ps-1 md:px-4 relative mb-3">
                                            <Datepicker />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tasmi' & Pencapaian */}
                        <div className="grid grid-row-2 gap-2 lg:w-6/12 px-4">
                            {/* Tasmi' */}
                            <div className="w-full">
                                <label
                                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                >
                                    {`Tasmi'`}
                                </label>
                                <div className="flex items-center gap-2">
                                    <div className="w-full pe-2 relative mb-3">
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
                                    <div className="w-full ps-2 relative mb-3">
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue=""
                                            placeholder="Ali-Imran:13"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Jumlah Tasmi & Murojaah */}
                            <div className="w-full">
                                <div className="relative w-full mb-3">                                    
                                    <div className="md:flex items-center gap-2">
                                        <div className="w-full mb-3 md:mb-0 md:pe-5 relative">
                                            <label
                                                className="group block uppercase text-slate-600 text-xs font-bold mb-2"
                                            >
                                                Jumlah Lembar <span className='group-hover:underline decoration-2'>Setoran</span>
                                            </label>
                                            <input
                                            type="number"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue=""
                                            placeholder="2.5"
                                            />
                                        </div>
                                        <div className="w-full md:ps-5 relative">
                                            <label
                                                className="group block uppercase text-slate-600 text-xs font-bold mb-2"
                                            >
                                                Jumlah Lembar <span className="group-hover:underline decoration-2">Murojaah</span>
                                            </label>
                                            <input
                                            type="number"
                                            className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            defaultValue=""
                                            placeholder="10.4"
                                            />
                                        </div>
                                    </div>
                                </div>
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
                                    placeholder='Tidak pernah absen selama satu pekan dan konsisten murojaah'
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
