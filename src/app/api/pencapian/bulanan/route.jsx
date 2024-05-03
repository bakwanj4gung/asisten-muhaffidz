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
                "setoran_ayat_awal": "Al-Baqarah:1",
                "setoran_ayat_terakhir": "Al-Baqarah:120",
                "jumlah_halaman_setoran": 31,
                "jumlah_lembar_murojaah": 80.6,
                "catatan": "Alhamdulillah mumtaz",
            },
            {
                "id": 2,
                "santri_id": 2,
                "bulan": "Januari",
                "setoran_ayat_awal": "Al-Baqarah:1",
                "setoran_ayat_terakhir": "Al-Baqarah:140",
                "jumlah_halaman_setoran": 36,
                "jumlah_lembar_murojaah": 90,
                "catatan": "Alhamdulillah mantap",
            },
        ]
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}