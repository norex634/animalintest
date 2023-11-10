import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { uploadImageToCloudinary,deleteImageFromCloudinary } from "@/utils/fetch/UploadImageToCloudinary";
import { info } from "autoprefixer";
import { getToken } from "next-auth/jwt"

export async function GET(req) {
    
    const idAnimal = req.nextUrl.searchParams.get("id");

    const images = await prisma.Images.findMany({
        where: {
          animalId: parseInt(idAnimal),
        },
      });
      if (!images) {
        return NextResponse.json( { images: [] }, { status: 200 });
      }
      
    
    
    return NextResponse.json( {images} , { status: 200 });
}

export async function DELETE(req, res) {
  console.log("token : ",token)
  if (token) {
    const { nom } = await req.json();
    const data = await req.json();
    const imgToSup = data.imgToSup
    console.log(data)
    for (const img of imgToSup) {
      await deleteImageFromCloudinary(img.publicId)
      const supImg = await prisma.Images.delete({
        where: {
          id: parseInt(img.id),
        },
      });
      console.log("supImg",supImg)
      if (!supImg) {
        return NextResponse.json('supImg pas ok', { status: 200 });
      }
    }
    // const idAnimal = req.nextUrl.searchParams.get("id");
    // const supImg = await prisma.Images.delete({
    //     where: {
    //       id: parseInt(idAnimal),
    //     },
    //   });
    
    // if (!supImg) {
    //   return NextResponse.json('supImg pas ok', { status: 200 });
    // }
    return NextResponse.json( 'supImg ok' , { status: 200 });
  } else {
    // Not Signed in
    console.log("Unauthorized")
    return NextResponse.json("else token")
  }
}

export async function POST(req,res) {
  const token = await getToken({ req })
  console.log("token : ",token)
  if (token) {
    const data = await req.formData()
    const animalId = data.getAll("animalId")
    
    const files = data.getAll("files")

    let infoImgs = []
    for (const file of files) {
      const { publicId, img, imgNom } = await uploadImageToCloudinary(file);
      infoImgs.push({ publicId, img, imgNom, animalId });
    }
    const newImg = await prisma.Images.createMany({
        data: infoImgs.map((infoImg) => ({
          publicId: infoImg.publicId,
          img: infoImg.img,
          nom: infoImg.imgNom,
          animalId: parseInt(infoImg.animalId),
        })),
        skipDuplicates: true,
    });
    console.log("image envoyer : ",newImg)

  return NextResponse.json("send")

  } else {
    // Not Signed in
    console.log("Unauthorized")
    return NextResponse.json("else token")
  }
}

// export async function PATCH(req,res) {
//   const { nom, raceId } = await req.json();

//   const patchRace = await prisma.race.update({
//     where: 
//       { id : raceId },
//     data: {
//       nom: nom,
//     },
//   });

//   console.log("ma race modifier : ",patchRace)
    // return NextResponse.json("send")
// }

