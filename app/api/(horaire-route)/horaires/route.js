import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

export async function GET(req, res) {
    try{
      const horaire = await prisma.Horaire.findMany({});
      if (!horaire) {
        return NextResponse.json({ horaire: [] }, { status: 200 });
      }
      return NextResponse.json( {horaire} , { status: 200 });
    }catch(error){
      console.error("Une erreur s'est produite lors de la récupération des horaire:", error);
      return NextResponse.error("Erreur lors de la récupération des horaire", { status: 500 });
    }
}