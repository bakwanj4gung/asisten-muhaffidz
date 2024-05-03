'use client';

import { useRouter } from 'next/navigation';

function BackButton() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <button 
            onClick={handleGoBack} 
            className="flex items-center gap-2 bg-gray-700 text-white active:bg-slate-700 font-bold uppercase text-sm px-6 py-3 rounded shadow transition-all duration-150 hover:shadow-lg hover:bg-slate-600 outline-none focus:outline-none mr-1 mb-1 ease-linear" 
            type="button"
        >
            <i className='fas fa-arrow-left' />
            <span className='hidden lg:inline-block'>Kembali</span>
        </button>
    );
}

export default BackButton;
