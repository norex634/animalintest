import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const race = await prisma.Race.findMany({
        include : {animal: true}
    });

    return NextResponse.json(race)
    
}