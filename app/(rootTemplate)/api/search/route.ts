import albums from "@/albums.json";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";
  const results = albums.filter((album) =>
    album.name.toLowerCase().includes(query.toLowerCase())
  );
  return NextResponse.json(results);
}
