import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";
import { getToken } from "next-auth/jwt"

export async function GET(req, res) {

    const categoriesAnimaux = await prisma.CategorieAnimal.findMany({
        include : {animal: true}
    });
    if (!categoriesAnimaux) {
        return NextResponse.json({ categoriesAnimaux: [] }, { status: 200 });
    }
    return NextResponse.json( {categoriesAnimaux} , { status: 200 });
}

export async function POST(req) {
    const token = await getToken({ req })
    console.log("token : ",token)
    if (token) {
    const { nom, img } = await req.json();
    
    const newCategorie = await prisma.categorieAnimal.create({
         data: {
         nom: nom,
         slug: slugify(nom, { lower: true }),
         img: img,
         },
    });
    
    console.log("ma categorie envoiée : ",newCategorie)
    return NextResponse.json("send")
} else {
    // Not Signed in
    console.log("Unauthorized")
    return NextResponse.json("else token")
  }
}

export async function PATCH(req) {
    const token = await getToken({ req })
    console.log("token : ",token)
    if (token) {
    const { nom, categorieId } = await req.json();
    
    const patchCategorie = await prisma.categorieAnimal.update({
        where:{
            id: categorieId
        }, 
        data: {
         nom: nom,
         slug: slugify(nom, { lower: true }),
         img: "inc",
         },
    });
    
    console.log("ma modif du type : ",patchCategorie)
    return NextResponse.json("send")
} else {
    // Not Signed in
    console.log("Unauthorized")
    return NextResponse.json("else token")
  }
}

export async function DELETE(req) {
    const token = await getToken({ req })
    console.log("token : ",token)
    if (token) {
    const data = await req.json();
    
    const DeleteCategorie = await prisma.categorieAnimal.delete({
        where:{
            id: parseInt(data)
        },
    });
    
    console.log("ma suprétion du type : ",DeleteCategorie)
    return NextResponse.json("send")
} else {
    // Not Signed in
    console.log("Unauthorized")
    return NextResponse.json("else token")
  }
}