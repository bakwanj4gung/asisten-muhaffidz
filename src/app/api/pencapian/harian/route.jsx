import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        "status": "success",
        "message": "Data fetched successfully",
        "status_code": 200,
        "data": [
            {
                "id": 1,
                "santri_id": 1,
                "bulan": "Januari",
                "tanggal": "14-01-2023",
                "setoran_ayat_awal": "Al-Baqarah:1",
                "setoran_ayat_terakhir": "Al-Baqarah:20",
                "jumlah_halaman_setoran": 3,
                "murojaah": "Juz 30",
                "lulus": false,
                "catatan": "Huruf Ro tidak jelas, Ikhfa, Idgham masih belum benar",
            },
            {
                "id": 2,
                "santri_id": 2,
                "bulan": "Januari",
                "tanggal": "14-01-2023",
                "setoran_ayat_awal": "Ali Imron:1",
                "setoran_ayat_terakhir": "Ali Imron:20",
                "jumlah_halaman_setoran": 2,
                "murojaah": "Juz 1",
                "lulus": true,
                "catatan": "Sudah lancar",
            },
        ]
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}