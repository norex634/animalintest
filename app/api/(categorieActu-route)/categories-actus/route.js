import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const categoriesActus = await prisma.CategorieActu.findMany({
        include : {actu: true}
    });

    return NextResponse.json(categoriesActus)
    
}