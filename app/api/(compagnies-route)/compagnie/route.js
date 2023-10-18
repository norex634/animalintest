import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const compagnie = await prisma.Compagnie.findFirst({
        include: { social: true, horaire: true }
    });

    if (!compagnie || compagnie.length === 0) {
        return NextResponse.json({ compagnie: [] }, { status: 200 })
    }
    
    return NextResponse.json({ compagnie }, { status: 200 })

}