import SidebarHalaqoh from '@/components/SidebarHalaqoh'
import React from 'react'

export default function LayoutHalaqoh({ children }) {
    return (
        <>
			<SidebarHalaqoh />
			<div className="relative md:ml-64 min-h-screen h-fit bg-slate-100 bg-no-repeat bg-full" style={{ backgroundImage: "url('/img/bg-hero.svg')"}}>
				<div className='flex flex-col gap-10'>
					{children}
				</div>
			</div>
		</>
	)
}
