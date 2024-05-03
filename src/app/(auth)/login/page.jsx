import Link from 'next/link'
import React from 'react'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h6 className="text-slate-800 uppercase text-lg font-bold">
                                    Sign in
                                </h6>
                            </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <LoginForm />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-6 relative">
                        <div className="w-1/2">
                            <a
                            href="#pablo"
                            // onClick={(e) => e.preventDefault()}
                            className="text-slate-200"
                            >
                            <small>Forgot password?</small>
                            </a>
                        </div>
                        <div className="w-1/2 text-right">
                            <Link href="/register" className="text-slate-200">
                                <small>Create new account</small>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
