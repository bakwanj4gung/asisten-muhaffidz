'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

export default function LoginForm() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = { email, password };

        try {
            const res = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if(!res.ok) {
                throw new Error('Failed to login');
            }

            const data = await res.json();
            console.log(data);
            localStorage.setItem('token', data.access_token);
            setError('');
        } catch(error) {
            setError('Login failed. Please check your credentials.');
            console.error('Login error:', error);
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    id='email'
                    type="email"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    Remember me
                </span>
                </label>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="text-center mt-6">
                <button
                    className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                >
                    Sign In
                </button>
            </div>
        </form>
    )
}
