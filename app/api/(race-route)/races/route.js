import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const race = await prisma.Race.findMany({
        include : {animal: true}
    });

    return NextResponse.json(race)
    
}

export async function POST(req,res) {
    const { nom } = await req.json();

    const newRace = await prisma.race.create({
      data: {
        nom: nom,
      },
    });

    console.log("ma race envoiée : ",newRace)
    return NextResponse.json("send")
}