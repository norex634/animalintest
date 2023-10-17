import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const actus = await prisma.Actu.findMany({
        include : {
            categorie: true, 
        }
    });

    return NextResponse.json(actus)
    
}