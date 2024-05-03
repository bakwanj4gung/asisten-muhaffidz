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
                "nama": "Abu Bakar Ash-Shiddiq",
            },
            {
                "id": 2,
                "user_id": 1,
                "nama": "Umar bin Khattab",
            },
            {
                "id": 3,
                "user_id": 1,
                "nama": "Utsman bin Affan",
            },
        ]
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}