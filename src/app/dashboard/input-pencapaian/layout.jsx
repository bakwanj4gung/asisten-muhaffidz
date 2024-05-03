import NavBar from '@/components/NavBar'
import React from 'react'

export default function LayoutInputPencapaian({ children }) {
    return (
        <>
            <NavBar headName={'Input Pencapaian'} back={true} />
            <div className="px-4 min-h-screen-75 h-full md:px-10 mx-auto w-full">
                {children}
            </div>
        </>
    )
}
