import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const compagnies = await prisma.Compagnie.findMany({
        include: { social: true, horaire: true }
    });

    if (!compagnies || compagnies.length === 0) {
        return NextResponse.json({ compagnie: [] }, { status: 200 })
    }
    
    return NextResponse.json({ compagnies }, { status: 200 })

}