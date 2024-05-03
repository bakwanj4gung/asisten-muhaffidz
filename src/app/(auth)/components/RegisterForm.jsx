import React from 'react'

export default function RegisterForm() {
    return (
        <>
            <form>
                <div className="relative w-full mb-3">
                    <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="nama"
                    >
                    Nama
                    </label>
                    <input
                    id="nama"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="email"
                    >
                    Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    />
                </div>

                <div className="relative w-full mb-3">
                    <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="password"
                    >
                    Password
                    </label>
                    <input
                    id="password"
                    type="password"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    />
                </div>

                <div>
                    <label className="inline-flex items-center cursor-pointer">
                    <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-slate-600">
                        I agree with the{" "}
                        <a
                        href="#pablo"
                        className="text-lightBlue-500"
                        // onClick={(e) => e.preventDefault()}
                        >
                        Privacy Policy
                        </a>
                    </span>
                    </label>
                </div>

                <div className="text-center mt-6">
                    <button
                    className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    >
                    Create Account
                    </button>
                </div>
            </form>
        </>
    )
}
