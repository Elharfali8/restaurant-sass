import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      description,
      price,
      stock,
      category,
      image,
      active,
    } = body;

    if (!name || !price || !category) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const db = client.db("restaurant-saas");

    const newProduct = {
      name,
      description: description || "",
      price: Number(price),
      stock: Number(stock) || 0,
      category,
      image: image || "",
      active: active ?? true,
      createdAt: new Date(),
    };

    const result = await db
      .collection("products")
      .insertOne(newProduct);

    return NextResponse.json(
      {
        message: "Product created",
        productId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}


// GET PRODUCTS
export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("restaurant-saas");

    const products = await db
      .collection("products")
      .find({})
      .toArray();

    return NextResponse.json(products);

  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}