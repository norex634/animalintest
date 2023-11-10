import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

export async function GET(req, res) {
    try {
        const compagnie = await prisma.Compagnie.findFirst({
            include: { social: true, horaire: true }
        });

        if (!compagnie) {
            return NextResponse.json({ compagnie: [] }, { status: 200 });
        }

        return NextResponse.json( {compagnie} , { status: 200 });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération de la compagnie:", error);
        return NextResponse.error("Erreur lors de la récupération de la compagnie", { status: 500 });
    }
}

export async function PATCH(req, res) {
    const token = await getToken({ req })
    // console.log("token : ",token)
    if (token) {
    const {nom, slogan, tel, lieu, email,compagnieId}  = await req.json();
    console.log(nom,slogan,tel,lieu,email,compagnieId)
      const patchCompagnie = await prisma.Compagnie.update({
        
        where: {
          id : parseInt(compagnieId)
        },
        data: {
        nom: nom,
        logo : "https://picsum.photos/50/50",
        slogan : slogan,
        tel:tel,
        lieu:lieu,
        email:email,
          
        },
      });
  
      console.log("ma compagnie  envoiée : ", patchCompagnie)
      return NextResponse.json("send")
    } else {
      // Not Signed in
      console.log("Unauthorized")
      return NextResponse.json("else token")
    }
  
    }