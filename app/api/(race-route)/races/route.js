import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

export async function GET(req, res) {
    
    const races = await prisma.Race.findMany({
        orderBy: {
          id: "desc", // Triez par date d'arrivée de la plus récente à la plus ancienne
        },
        include : {animal: true}
    });
    if (!races) {
      return NextResponse.json({ races: [] }, { status: 200 });
    }
    return NextResponse.json( {races} , { status: 200 });
    
}


export async function POST(req,res) {
  const token = await getToken({ req })
  // console.log("token : ",token)
  if (token) {
    const { nom } = await req.json();

    const newRace = await prisma.race.create({
      data: {
        nom: nom,
      },
    });
    console.log(token ," avant la race add")
    console.log("ma race envoiée : ",newRace)
    return NextResponse.json("send")
  } else {
    // Not Signed in
    console.log("Unauthorized")
    return NextResponse.json("else token")
  }
}

export async function PATCH(req,res) {
  const token = await getToken({ req })
    if (token) {
  const { nom, raceId } = await req.json();

  const patchRace = await prisma.race.update({
    where: 
      { id : raceId },
    data: {
      nom: nom,
    },
  });

  console.log("ma race modifier : ",patchRace)
  return NextResponse.json("send")
  } else {
    // Not Signed in
    console.log("Unauthorized")
    return NextResponse.json("else token")
  }
}

export async function DELETE(req,res) {
  const token = await getToken({ req })
    if (token) {
  const data = await req.json();

  const DeleteRace = await prisma.race.delete({
    where: 
      { id : parseInt(data) } ,
    
  });

  console.log("ma race suprimer : ",DeleteRace)
  return NextResponse.json("send")
  } else {
    // Not Signed in
    console.log("Unauthorized")
    return NextResponse.json("else token")
  }
}

