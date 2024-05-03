'use client';

import Image from 'next/image';
import React from 'react'
import ReactSelect from 'react-select'
import ButtonSubmit from './ButtonSubmit';

const gender = [
    { value: "Laki-laki", label: "Laki-laki" },
    { value: "Perempuan", label: "Perempuan" },
]

export default function FormEditProfile() {

    return (
        <div className="w-full bg-white mb-6 shadow-xl rounded-lg">
            <div className="flex flex-col w-full shadow-lg rounded-lg bg-slate-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <h6 className="text-slate-700 text-xl font-bold">Edit Profil Saya</h6>
                </div>
                <div className="border-2 flex-auto px-4 lg:px-10 py-10">
                    <form>
                        <div className="flex flex-col-reverse xl:flex-row items-center justify-center">
                            <div className="flex flex-col w-full">
                                {/* Nama */}
                                <div className="w-full px-4 mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="nama"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        placeholder="Muhammad Faqih Ali"
                                    />
                                </div>
                                {/* Email */}
                                <div className="w-full px-4 mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        placeholder="emailanda@assitsmuhaffidz.com"
                                    />
                                </div>
                                {/* Password */}
                                <div className="w-full px-4 mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        placeholder="******"
                                    />
                                </div>
                                {/* Umur */}
                                <div className="w-full px-4 mb-3">
                                    <label
                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                        htmlFor="umur"
                                    >
                                        Umur
                                    </label>
                                    <input
                                        type="number"
                                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue=""
                                        placeholder="20"
                                    />
                                </div>
                                {/* Gender */}
                                <div className="w-full px-4">
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
                            <div className="w-full flex flex-col items-center justify-center">
                                <div>
                                    <Image 
                                        src={"https://source.unsplash.com/random/400x400?person-portrait"} 
                                        width={175} height={175} 
                                        className="rounded-3xl m-auto"
                                        alt='profile' 
                                    />
                                </div>
                                <div className="mt-3 w-3/4">
                                    <div>
                                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none " aria-describedby="file_input_help" type="file" />
                                        <p className="mt-1 text-xs text-gray-500" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full mt-3 mb-3 px-4">
                            <label
                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Bio
                            </label>
                            <textarea
                                type="text"
                                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                rows="2"
                                defaultValue=""
                                placeholder='Just a handsome man'
                            ></textarea>
                        </div>
                        <div className="text-center mt-6 mx-4 md:w-1/4">
                            <ButtonSubmit value={'Simpan'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
