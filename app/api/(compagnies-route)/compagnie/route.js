import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const compagnie = await prisma.Compagnie.findFirst({
        include : {social: true, horaire:true}
    });

    return NextResponse.json(compagnie)
    
}