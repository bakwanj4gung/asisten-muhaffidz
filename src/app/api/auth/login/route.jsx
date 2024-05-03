// export default async function login(req, res) {
    // if(req.method !== 'POST') {
    //     return res.status(405).json({ message: 'Method not allowed' });
    // }

    // const { email, password } = req.body;

    // if (email === 'alimuhammadfaqih@gmail.com' && password === 'Tahfidz2023') {
    //     // Login berhasil, kirimkan token (contoh)
    //     const token = 'example_token';
    //     return res.status(200).json({ token });
    // } else {
    //     // Login gagal, kirimkan pesan kesalahan
    //     return res.status(401).json({ message: 'Invalid credentials' });
    // }

    // try {
    //     const response = await fetch('http://127.0.0.1:8000/api/login', { 
    //         method: 'POST',
    //         headers : { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email, password }),
    //     });

    //     if(!response.ok){
    //         throw new Error('Failed to login');
    //     }

    //     const data = await response.json();
    //     res.status(200).json({ token: data.access_token });
    // } catch (error) {
    //     console.error('Login error:', error);
    //     res.status(500).json({ error: 'Login failed. Please try again.' });
    // }
// }

