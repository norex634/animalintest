import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const animaux = await prisma.Animal.findMany({
      include: {
        categorie: true,
        sexe: true,
        race: true, 
        image: true,
    },
    orderBy: {
        dateArrive: "desc", // Triez par date d'arrivée de la plus récente à la plus ancienne
      },
    
    // take: 3, // Récupérer seulement le nombre d'éléments spécifié par la limite
  });
   console.log(animaux)

    if (!animaux) {
       return NextResponse.json({ animaux: [] }, { status: 200 });
    }
     return NextResponse.json({animaux} , { status: 200 });
    
}