import NavBar from '@/components/NavBar'
import React from 'react'

async function getSantriData() {
    const res = await fetch('http://localhost:3000/api/auth/register' , { method: 'GET' });
    return res.json();
}

export default async function DashboardMainPage() {
    const santri = await getSantriData();
    console.log(santri.data);
    return (
        <>
            <NavBar />
            <div className="px-4 h-full md:px-10 mx-auto w-full">
                <div>
                    <h1 className="text-3xl font-bold text-white">Welcome, <span className='underline decoration-4 underline-offset-4 decoration'>Muhammad Faqih Ali</span></h1>
                    {santri.data.items && santri.data.items.map((santri) => (
                        <div key={santri.id}>
                            <h1>{santri.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
