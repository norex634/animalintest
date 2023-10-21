import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const races = await prisma.Race.findMany({
        include : {animal: true}
    });
    if (!races) {
      return NextResponse.json({ races: [] }, { status: 200 });
    }
    return NextResponse.json( {races} , { status: 200 });
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