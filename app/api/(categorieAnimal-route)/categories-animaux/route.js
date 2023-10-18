import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(req, res) {

    const categoriesAnimaux = await prisma.CategorieAnimal.findMany({
        include : {animal: true}
    });

    if (!categoriesAnimaux || categoriesAnimaux.length === 0) {
        return NextResponse.json({ categoriesAnimaux: [] }, { status: 200 })
    }

    return NextResponse.json({ categoriesAnimaux }, { status: 200 })
}

export async function POST(req) {
     
    const { nom, img } = await req.json();
    
    const newCategorie = await prisma.categorieAnimal.create({
         data: {
         nom: nom,
         slug: slugify(nom, { lower: true }),
         img: img,
         },
    });
    
    console.log("ma categorie envoiée : ",newCategorie)
    return NextResponse.json({message : "Categorie envoyer"})
}