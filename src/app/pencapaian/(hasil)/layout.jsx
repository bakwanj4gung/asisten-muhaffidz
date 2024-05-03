'use client';

import ButtonGroupPencapaianTable from '@/components/ButtonGroupPencapaianTable'
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar'
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'

export default function LayoutHomePencapaian({ children }) {
    return (
        <>
			<Sidebar />
			<div className="relative md:ml-64 min-h-screen h-fit bg-slate-100 bg-no-repeat bg-full" style={{ backgroundImage: "url('/img/bg-hero.svg')"}}>
				<div className='flex flex-col gap-10'>
					<NavBar headName="Pencapaian" home={true} />
					<div className="px-4 min-h-screen-75 h-full md:px-10 mx-auto w-full">
                        <div className="px-4 md:px-10 mx-auto w-full">
                            <div>
                            {/* Period Options */}
                                <div className="flex flex-wrap">
                                    <Card href="/dashboard/input-pencapaian/harian" period="Harian" />
                                    <Card href="/dashboard/input-pencapaian/mingguan" period="Mingguan" />
                                    <Card href="/dashboard/input-pencapaian/bulanan" period="Bulanan" />
                                </div>
                            </div>
                            <div className="mt-10 px-3">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                                    <div className="rounded-t relative mb-0 px-4 py-3 border-0 flex flex-col">
                                        <div className="flex flex-wrap items-center justify-between me-5 py-3 mb-2 md:w-3/5 md:ms-auto">
                                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                                <h3 className="font-semibold text-lg text-slate-700">
                                                    <a href="/pencapaian/hasil">Hasil Pencapaian</a>
                                                    
                                                </h3>
                                            </div>
                                            <div className="hidden lg:inline-flex rounded-md shadow-sm" role="group">
                                                <ButtonGroupPencapaianTable href='/pencapaian/hasil/harian' className="rounded-s-lg" value="Harian" />
                                                <ButtonGroupPencapaianTable href='/pencapaian/hasil/mingguan' value="Mingguan" />
                                                <ButtonGroupPencapaianTable href='/pencapaian/hasil/bulanan' className="rounded-e-lg" value="Bulanan" />
                                            </div>
                                            <div className="block lg:hidden">
                                                <Menu>
                                                    <MenuHandler>
                                                        <i className='fas fa-ellipsis-vertical' />
                                                    </MenuHandler>
                                                    <MenuList>
                                                        <MenuItem>
                                                            <Link href="/pencapaian/input/harian">
                                                                Harian
                                                            </Link>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <Link href="/pencapaian/input/mingguan">
                                                                Mingguan
                                                            </Link>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <Link href="/pencapaian/input/bulanan">
                                                                Bulanan
                                                            </Link>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                        </div>
                                        {children}
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

function Card({ href, period }) {
    return (
        <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-1">
            <Link href={href}>
                <div className="relative min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg group trasition-all duration-300 hover:scale-110">
                    <div className="flex flex-wrap p-4">
                        <div className="w-full pr-4 max-w-full uppercase flex-grow flex-1">
                            <h5 className="text-slate-400 tracking-widest text-xxs">
                                Input Pencapaian
                            </h5>
                            <span className="font-semibold text-xl text-slate-700">
                                {period}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
