import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";
import { getToken } from "next-auth/jwt"

export async function GET(req, res) {

    const categoriesActus = await prisma.CategorieActu.findMany({
        include : {actu: true}
    });
    if (!categoriesActus) {
      return NextResponse.json({ categoriesActus: [] }, { status: 200 });
    }
    return NextResponse.json( {categoriesActus} , { status: 200 });

}

export async function POST(req, res) {
  const token = await getToken({ req })
  console.log("token : ",token)
  if (token) {
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
  } else {
    // Not Signed in
    console.log("Unauthorized")
    return NextResponse.json("else token")
  }
  }

  export async function PATCH(req, res) {
    const token = await getToken({ req })
  console.log("token : ",token)
  if (token) {
    const {nom, catid}  = await req.json();
    
      const PatchCategorieActu = await prisma.CategorieActu.update({
        where: {
          id : catid
        },
        data: {
          nom: nom,
          slug : slugify(nom, {lower: true}),
          img: "www.monimage.com",
        },
      });
  
      console.log("ma catégorie actu envoiée : ",PatchCategorieActu)
      return NextResponse.json("send")
    } else {
      // Not Signed in
      console.log("Unauthorized")
      return NextResponse.json("else token")
    }
    }

    export async function DELETE(req, res) {
      const token = await getToken({ req })
    // console.log("token : ",token)
    if (token) {
      const data  = await req.json();
      console.log("id ", data)
        const DeleteCategorieActu = await prisma.CategorieActu.delete({
          where: {
            id : parseInt(data)
          },
        });
    
        console.log("ma catégorie actu supprimé : ",DeleteCategorieActu)
        return NextResponse.json("send")
      } else {
        // Not Signed in
        console.log("Unauthorized")
        return NextResponse.json("else token")
      }
      }



