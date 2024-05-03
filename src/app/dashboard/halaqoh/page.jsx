'use client';

import CardHalaqoh from '@/components/CardHalaqoh'
import NavBar from '@/components/NavBar'
import React, { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import ButtonSubmit from '@/components/ButtonSubmit';
import Link from 'next/link';

async function getSantriData() {
    const token = localStorage.getItem('token');
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    }

    const res = await fetch(
        'http://127.0.0.1:8000/api/halaqoh', 
        { 
            method: 'GET',
            headers: { headers }
        }
    );

    return res.json();
}

export default function DashboardHalaqohPage() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onOpenModal() {
        setOpenModal(true);
        setEmail('');
    }


    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
      }
    return (
        <>
            <NavBar headName="Halaqoh" home={true} />
            <div className="px-4 min-h-screen-75 h-full md:px-10 mx-auto w-full">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <div>
                    {/* Card stats */}
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                            <div className='flex items-center justify-center py-4 bg-slate-50 rounded xl:mb-0 h-full shadow-lg trasition-all duration-300 hover:scale-110'>
                                    <button onClick={onOpenModal} className='w-full flex flex-col items-center justify-center'>
                                        <i className='fa-solid fa-plus text-4xl mb-3'/>
                                        <p className='text-xl font-semibold'>Tambah Halaqoh</p>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                <CardHalaqoh halaqohName="Halaqoh 1" santriCount="5" />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                <CardHalaqoh halaqohName="Halaqoh 1" santriCount="9" />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                <CardHalaqoh halaqohName="Halaqoh 1" santriCount="10" />
                            </div>
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                <CardHalaqoh halaqohName="Halaqoh 1" santriCount="14" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Tambah Halaqoh Baru</h3>
                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="nama" value="Nama Halaqoh" />
                    </div>
                    <TextInput
                        id="nama"
                        placeholder="Abu Bakar Ash-Shiddiq"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    </div>
                    <div className="w-full">
                        <ButtonSubmit value="Simpan" />
                    </div>
                    
                </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
