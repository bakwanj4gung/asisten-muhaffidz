import Link from 'next/link'
import React from 'react'
import RegisterForm from '../components/RegisterForm'

export default function RegisterPage() {
    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-5/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h6 className="text-slate-800 text-lg uppercase font-bold">
                                    Sign up
                                </h6>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <RegisterForm />
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-6 relative">
                        <div className="w-1/2 text-center">
                            <small className="text-slate-200">
                                Already have an account?
                                <Link href="/login">
                                    <span className="ml-1 text-teal-600 font-semibold transition-all duration-300 hover:text-teal-300">Login</span>
                                </Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
