import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function LayoutDashboard({ children }) {
    return (
        <>
			<Sidebar />
			<div className="relative md:ml-64 min-h-screen h-fit bg-slate-100 bg-no-repeat bg-full" style={{ backgroundImage: "url('/img/bg-hero.svg')"}}>
				<div className='flex flex-col gap-10 px-2'>
					{children}
				</div>
				{/* <FooterAdmin /> */}
			</div>
		</>
	)
}
