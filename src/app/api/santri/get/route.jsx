import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        "status": "success",
        "message": "Data fetched successfully",
        "status_code": 200,
        "data": [
            {
                "id": 1,
                "user_id": 1,
                "halaqoh_id": 1,
                "nama": "Joko Winarno",
                "umur": 22,
                "gender": "Laki-Laki",
                "sekolah": "Universitas Indonesia",
                "alamat": "Jalan Raya Cimanggis",
                "deskripsi": "Rajin, tekun, cepat hafal",
                "foto_profil": "https://source.unsplash.com/random/200x200?person-portrait-man"
            },
            {
                "id": 2,
                "user_id": 1,
                "halaqoh_id": 1,
                "nama": "Muhammad Faqih Ali",
                "umur": 21,
                "gender": "Laki-Laki",
                "sekolah": "Havard University",
                "alamat": "Birmingham",
                "deskripsi": "tampan, pintar, rajin hafal",
                "foto_profil": "https://source.unsplash.com/random/200x200?person-portrait-man"
            },
        ]
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}