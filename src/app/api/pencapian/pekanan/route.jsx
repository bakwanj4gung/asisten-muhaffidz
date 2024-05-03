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
                "pekan": "Pertama",
                "tanggal_awal_pekan": "14-01-2023",
                "tanggal_awal_akhir": "21-01-2023",
                "setoran_ayat_awal": "Al-Baqarah:1",
                "setoran_ayat_terakhir": "Al-Baqarah:20",
                "jumlah_halaman_setoran": 10,
                "jumlah_lembar_murojaah": 10.1,
                "catatan": "setiap hari masuk, tajwid membaik",
            },
            {
                "id": 1,
                "santri_id": 1,
                "bulan": "Januari",
                "pekan": "Pertama",
                "tanggal_awal_pekan": "14-01-2023",
                "tanggal_awal_akhir": "21-01-2023",
                "setoran_ayat_awal": "Al-Baqarah:1",
                "setoran_ayat_terakhir": "Al-Baqarah:20",
                "jumlah_halaman_setoran": 10,
                "jumlah_lembar_murojaah": 10.1,
                "catatan": "setiap hari masuk, tajwid membaik",
            },
        ]
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}