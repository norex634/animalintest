import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";
import { getToken } from "next-auth/jwt"

export async function GET(req, res) {

    const actus = await prisma.Actu.findMany({
        include : {
            categorie: true, 
        }
    });
    if (!actus) {
      return NextResponse.json({ actus: [] }, { status: 200 });
    }
    return NextResponse.json( {actus} , { status: 200 });
    
}

export async function POST(req, res) {
    const token = await getToken({ req })
    console.log("token : ",token)


    if (token) {
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
  const {titre, text, categorie, catid}  = await req.json();
  
    const patchActu = await prisma.actu.update({
      
      where: {
        id : catid
      },
      data: {
        titre: titre,
        slug : slugify(titre, {lower: true}),
        descr : text,
        categorie: {
          connect: { id: parseInt(categorie) },
        },
      },
    });

    console.log("ma catégorie actu envoiée : ", patchActu)
    return NextResponse.json("send")
  } else {
    // Not Signed in
    console.log("Unauthorized")
    return NextResponse.json("else token")
  }

  }


  export async function DELETE(req, res) {
    const token = await getToken({ req })
    console.log("token : ",token)
    if (token) {
    const data  = await req.json();
    
      const DeleteActu = await prisma.actu.delete({
        
        where: {
          id : parseInt(data)
        },
      });
  
      console.log("ma catégorie actu suprimé : ", patchCategorieActu)
      return NextResponse.json("send")
    } else {
      // Not Signed in
      console.log("Unauthorized")
      return NextResponse.json("else token")
    }
  
    }