import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req, res) {

    const sexes = await prisma.Sexe.findMany({
        include : {animal: true}
    });

    if (!sexes || sexes.length === 0) {
        return NextResponse.json({ sexes: [] }, { status: 200 })
    }

    return NextResponse.json({ sexes }, { status: 200 })
}