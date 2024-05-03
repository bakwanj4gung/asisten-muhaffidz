import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        "status": "success",
        "message": "Data fetched successfully",
        "status_code": 200,
        "data": [
            {
                "id": 1,
                "nama": "Sutarman Putra",
                "email": "alimuhammadfaqih@gmail.com",
                "password": "Tahfidz2023",
                "foto_profil": "https://source.unsplash.com/random/200x200?person-portrait-man",
                "umur": 22,
                "gender": "Laki-Laki",
                "deskripsi": "Rajin, pintar, rajin hafal"
            },
        ]
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}