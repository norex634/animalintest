import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(req, res) {

    const actus = await prisma.Actu.findMany({
        include : {
            categorie: true, 
        }
    });
    if (!actus) {
      return NextResponse.json({ actus: [] }, { status: 200 });
    }
    return NextResponse.json( actus , { status: 200 });
    
}

export async function POST(req, res) {
    const { titre, text, categorie } = await req.json();

    const newActu = await prisma.actu.create({
      data: {
        titre: titre,
        slug: slugify(titre, { lower: true }),
        descr: text,
        categorie: {
          connect: { id: parseInt(categorie) },
        },
      },
    });

    console.log("mon actu envoiée : ",newActu)
    return NextResponse.json("send")
  
}