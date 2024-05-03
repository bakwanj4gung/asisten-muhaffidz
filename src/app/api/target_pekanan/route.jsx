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
                "jumlah_halaman": 10,
                "tercapai": 5,
            }
        ]
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}