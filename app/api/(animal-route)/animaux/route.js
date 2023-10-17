import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const animaux = await prisma.Animal.findMany({
        include : {
            categorie: true, 
            sexe: true, 
            race: true, 
            image: true
        }
    });

    return NextResponse.json(animaux)
    
}