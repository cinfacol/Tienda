import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_API_URL}/api/auth/users/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (!res.ok) {
      return NextResponse.json({ error: "Server responded with an error" });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error: "There was an error with the network request",
    });
  }
}
