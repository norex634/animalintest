import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const categoriesAnimaux = await prisma.CategorieAnimal.findMany({
        include : {animal: true}
    });

    return NextResponse.json(categoriesAnimaux)
    
}