import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";
import { uploadImageToCloudinary,deleteImageFromCloudinary } from "@/utils/fetch/UploadImageToCloudinary";
import { getToken } from "next-auth/jwt"

export async function GET(req, res) {
    const url = await req.nextUrl.searchParams;
    const sexe = url.get("sexe");
    const race = url.get("race");
    const type = url.get("type");
    const name = url.get("name");
    // const page = parseInt(url.get("page") || "1"); // Page par défaut 1
    // const limit = parseInt(url.get("limit") || "8"); // Limite par défaut 10
    // const search = url.get("search");
    // const offset = (page - 1) * limit;
    
    const whereClose = {}

    if (sexe !== null && sexe !== undefined && sexe !== "" && sexe !== "undefined") {
      // console.log("sexe", sexe);
      whereClose.sexe = { nom: sexe };
    }
    if (race !== null && race !== undefined && race !== "" && race !== "undefined") {
      // console.log("race", race);
      whereClose.race = { nom: race };
    }
    if (type !== null && type !== undefined && type !== "" && type !== "undefined") {
      // console.log("type", type);
      whereClose.categorie = { nom: type };
    }
    if (name !== null && name !== undefined && name !== "" && name !== "undefined") {
      whereClose.nom =  {contains : name} ;
    }
    console.log(whereClose)

    const animaux = await prisma.Animal.findMany({
      where: whereClose,
      orderBy: {
        dateArrive: "desc", // Triez par date d'arrivée de la plus récente à la plus ancienne
      },
      include: {
        categorie: true,
        sexe: true,
        race: true, 
        image: true,
    },
    // skip: offset, // Ignorer les éléments jusqu'à l'offset
    // take: limit, // Récupérer seulement le nombre d'éléments spécifié par la limite
  });
  // console.log(animaux)

    if (!animaux) {
       return NextResponse.json({ animaux: [] }, { status: 200 });
    }
     return NextResponse.json({animaux} , { status: 200 });
    
}


export async function POST(req, res) {
      
  const token = await getToken({ req })
  console.log("token : ",token)
  if (token) {
    const data = await req.formData()
    
    
    const DataAnimal = data.getAll("data")
    
    let infoImgs = []
    const files = data.getAll("files")
    console.log("files", files)

    for (const file of files) {
      const { publicId, img, imgNom } = await uploadImageToCloudinary(file);
      infoImgs.push({ publicId, img, imgNom });
    }

    const {nom,naissance,descrShort,descr,categorie,race,sexe} = JSON.parse(DataAnimal)
    const randomDigits = Math.floor(Math.random() * 9000000);
    const newAnimal = await prisma.animal.create({
      data: {
        nom: nom,
        slug: slugify(nom+{randomDigits}, { lower: true }),
        descrShort: descrShort,
        descr: descr,
          categorie : {
            connect: {id: parseInt(categorie)},
          },
          race : {
            connect: {id: parseInt(race)},
          },
          sexe : {
            connect: {id: parseInt(sexe)},
          },
          // map pour add toute les image dans la table image
          image : {
            createMany : {
              data: infoImgs.map((img) => ({
                nom: img.imgNom,
                img: img.img,
                publicId: img.publicId,
              })),
              skipDuplicates: true,
            }
          },
        },
      },
    );
    console.log(newAnimal)
    return NextResponse.json(newAnimal)
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
  const {nom, naissance, descrShort , descr , selectedType, selectedRace , selectedSexe , animalId, animalNaissance}  = await req.json();
  const randomDigits = Math.floor(Math.random() * 9000000);
  const slug = `${slugify(nom)}${randomDigits}`;
  
  if (naissance == null || naissance == undefined || naissance == "") {
    const patchAnimal = await prisma.animal.update({
      
      where: {
        id : animalId
      },
      data: {
        nom: nom,
        slug : slug,
        naissance :animalNaissance,
        descrShort : descrShort,
        descr : descr,
        categorie: {
          connect: { id: parseInt(selectedType) },
        },
        race : {
          connect: {id: parseInt(selectedRace)},
        },
        sexe : {
          connect: {id: parseInt(selectedSexe)},
        },
      },
    });

    console.log("mon animal modifier :  : ", patchAnimal)
    return NextResponse.json("send")
  }else{
    const patchAnimal = await prisma.animal.update({
      
      where: {
        id : animalId
      },
      data: {
        nom: nom,
        slug : slug,
        naissance :naissance,
        descrShort : descrShort,
        descr : descr,
        categorie: {
          connect: { id: parseInt(selectedType) },
        },
        race : {
          connect: {id: parseInt(selectedRace)},
        },
        sexe : {
          connect: {id: parseInt(selectedSexe)},
        },
      },
    });

    console.log("mon animal modifier :  : ", patchAnimal)
    return NextResponse.json("send")
  }
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
      
      const newAnimal = await prisma.animal.delete({
        where: {
          id : parseInt(data)
        }
      });
      console.log(newAnimal)
      return NextResponse.json(newAnimal)
    } else {
      // Not Signed in
      console.log("Unauthorized")
      return NextResponse.json("else token")
    }
  }
  