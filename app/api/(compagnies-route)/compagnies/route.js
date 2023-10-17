import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const compagnies = await prisma.Compagnie.findMany({
        include : {social: true, horaire:true}
    });

    return NextResponse.json(compagnies)
    
}