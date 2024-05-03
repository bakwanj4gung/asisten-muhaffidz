import React from 'react'

export default function ButtonSubmit({ value }) {
    return (
        <>
            <button
                type='submit'
                className="bg-slate-800 text-white active:bg-slate-600 text-sm font-semibold uppercase px-6 py-3 rounded shadow hover:shadow-xl hover:bg-slate-700 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            >
                {value}
            </button>
        </>
    )
}
