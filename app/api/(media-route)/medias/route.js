import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

export async function GET(req, res) {
    try{
      const media = await prisma.Social.findMany({});
      if (!media) {
        return NextResponse.json({ media: [] }, { status: 200 });
      }
      return NextResponse.json( {media} , { status: 200 });
    }catch(error){
      console.error("Une erreur s'est produite lors de la récupération des horaire:", error);
      return NextResponse.error("Erreur lors de la récupération des horaire", { status: 500 });
    }
}