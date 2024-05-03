import CardProfile from '@/components/CardProfile'
import FormEditProfile from '@/components/FormEditProfile'
import NavBar from '@/components/NavBar'
import React from 'react'

export default function page() {
    return (
        <>
            <NavBar headName='Profil' home={true} />
            <div className="px-4 md:px-10 mx-auto w-full flex flex-col mt-7 items-start justify-center lg:mt-4 xl:flex-row lg:gap-6">
                {/* Profile */}
                <CardProfile />
                {/* Edit Profile */}
                <FormEditProfile />
            </div>
        </>
    )
}
