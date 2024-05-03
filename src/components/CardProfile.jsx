import Image from 'next/image'
import React from 'react'

export default function CardProfile() {
    return (
        <div className="w-full py-5 max-h-fit bg-white mb-6 shadow-xl rounded-lg xl:max-w-sm">
            <div className='py-4 w-full mb-3 flex flex-col items-center justify-center'>
                <Image 
                    src={"https://source.unsplash.com/random/400x400?person-portrait"} 
                    width={150} height={150}
                    className="rounded-full m-auto"
                    alt='profile'
                />
                <div className='mt-2 text-center'>
                    <h4 className='mb-0 text-lg text-black'>Muhammad Faqih Ali</h4>
                </div>
                <div className="flex items-center justify-center mt-6 gap-8">
                    <div>
                        <i className='fas fa-graduation-cap text-slate-400 me-1' />
                        <span className="text-sm">10</span>
                    </div>
                    <div>
                        <i className='fas fa-user-group text-slate-400 me-1' />
                        <span className="text-sm">10</span>
                    </div>
                </div>
            </div>
            <div className='p-6 border-t-2 w-full'>
                <div className='mb-5 w-full'>
                    <p className='text-slate-400 text-sm'>Email</p>
                    <p className='text-black  break-words'>X6njnhnjhnjhnjnhnjjjnjnjnjhnjnnjnhjnnhjnhjjnjnjhjnnnjnhlFZ@example.com</p>
                </div>
                <div className='mb-5'>
                    <p className='text-slate-400 text-sm'>Gender</p>
                    <p className='text-black'>Laki-laki</p>
                </div>
                <div className='mb-5'>
                    <p className='text-slate-400 text-sm'>Umur</p>
                    <p className='text-black'>30 tahun</p>
                </div>
                <div className="mx-1 p-3 bg-slate-50 rounded-lg">
                    <p className="w-full text-center before:content-['\201C'] after:content-['\201D'] before:font-semibold after:font-semibold">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, cumque!
                    </p>
                </div>
            </div>
        </div>
    )
}
