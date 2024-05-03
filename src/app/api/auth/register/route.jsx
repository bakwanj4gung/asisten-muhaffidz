import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        "status": "success",
        "data": {
          "user": {
            "id": 123,
            "name": "John Doe",
            "email": "johndoe@example.com"
          },
          "items": [
            {
              "id": 1,
              "name": "Item 1",
              "price": 10.5
            },
            {
              "id": 2,
              "name": "Item 2",
              "price": 20.25
            }
          ]
        }
      });
}