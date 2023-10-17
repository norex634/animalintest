import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const sexe = await prisma.Sexe.findMany({
        include : {animal: true}
    });

    return NextResponse.json(sexe)
    
}