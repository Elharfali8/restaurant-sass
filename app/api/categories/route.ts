// GET UNIQUE CATEGORIES

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("restaurant-saas");

    const categories = await db
      .collection("products")
      .distinct("category");

    return NextResponse.json(categories);

  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}