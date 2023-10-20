import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(req, res) {

    const categoriesActus = await prisma.CategorieActu.findMany({
        include : {actu: true}
    });
    if (!categoriesActus) {
      return NextResponse.json({ categoriesActus: [] }, { status: 200 });
    }
    return NextResponse.json( categoriesActus , { status: 200 });
    
}

export async function POST(req, res) {
  
  const {nom}  = await req.json();
  
    const newCategorieActu = await prisma.CategorieActu.create({
      data: {
        nom: nom,
        slug : slugify(nom, {lower: true}),
        img: "www.monimage.com",
      },
    });

    console.log("ma catégorie actu envoiée : ",newCategorieActu)
    return NextResponse.json("send")

  }