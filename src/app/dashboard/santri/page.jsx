import React from 'react'
import NavBar from '@/components/NavBar';
import CardSantri from '@/components/CardSantri';
import Link from 'next/link';

async function getSantriData() {
    const res = await fetch('http://localhost:3000/api/santri/get' , { method: 'GET' });
    return res.json();
}

async function getHalaqohData() {
    const res = await fetch('http://localhost:3000/api/halaqoh' , { method: 'GET' });
    return res.json();
}

async function getPencapaianHarian(){
    const res = await fetch(`http://localhost:3000/api/pencapian/harian` , { method: 'GET' });
    return res.json();
}

async function getTanggalPencapaianHarianById(santriId, pencapaianData) {
    const pencapaian = pencapaianData.find((p) => p.santri_id === santriId);
    return pencapaian ? pencapaian.tanggal : {};
}

async function getAyatPencapaianHarianById(santriId, pencapaianData) {
    const pencapaian = pencapaianData.find((p) => p.santri_id === santriId);
    console.log(pencapaian);
    return pencapaian ? pencapaian.setoran_ayat_terakhir : {};
}

function getHalaqohNameById(halaqohId, halaqohData) {
    const halaqoh = halaqohData.find((h) => h.id === halaqohId);
    return halaqoh ? halaqoh.nama : '';
}

export default  async function SantriTablePage() {
    const santri = await getSantriData();
    const halaqoh = await getHalaqohData();
    const pencapaian = await getPencapaianHarian();
    console.log(pencapaian.data);
    console.log(santri.data);
    console.log(halaqoh.data);

    return (
        <>
            <NavBar headName="Santri" home={true} />
            
            <div className="px-4 min-h-screen-75 h-full md:px-10 mx-auto w-full">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <div>
                    {/* Card stats */}
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                <Link href={`/dashboard/santri/input`} className='flex flex-col items-center justify-center min-h-full bg-white rounded mb-6 xl:mb-0 shadow-lg trasition-all duration-300 hover:scale-110 cursor-pointer'>
                                    <i className='fa-solid fa-plus text-4xl mb-3' />
                                    <p className='text-xl font-semibold'>Tambah Santri baru</p>
                                </Link>
                            </div>
                            {santri.data && santri.data.map((santri) =>
                            (
                                
                                <div key={santri.id} className="w-full lg:w-6/12 xl:w-4/12 px-4 my-3">
                                    <CardSantri 
                                        halaqohName={getHalaqohNameById(santri.halaqoh_id, halaqoh.data)}
                                        santriName={santri.nama}
                                        santriPic={santri.foto_profil}
                                        lastSetoran={getAyatPencapaianHarianById(santri.id, pencapaian.data)}
                                        lastDateSetoran={getTanggalPencapaianHarianById(santri.id, pencapaian.data)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
