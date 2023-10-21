import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";
import { UploadImage } from "@/utils/Cloudinary";
import os from "os";
import path from "path";
import { v4 as uuidv4} from 'uuid';
import fs from "fs";

export async function GET(req, res) {

    const animaux = await prisma.Animal.findMany({
        include : {
            categorie: true, 
            sexe: true, 
            race: true, 
            image: true
        }
    });

    if (!animaux) {
      return NextResponse.json({ animaux: [] }, { status: 200 });
    }
    return NextResponse.json( {animaux} , { status: 200 });
    
}


export async function POST(req, res) {
      
    const data = await req.formData()
    console.log(data)
    
    const DataAnimal = data.getAll("data")
    console.log(DataAnimal)

      const files = data.getAll("files")
      console.log(files)

      const multipleBuffersPromise = files.map(file => (
        file.arrayBuffer()
          .then(data => {
            const buffer = Buffer.from(data);
            const name = uuidv4();
            const ext = file.type.split("/")[1];
            const tempdir = os.tmpdir();
            console.log('tempdir :',tempdir)
            const uploadDir = path.join(tempdir, `/${name}.${ext}`)
            console.log(uploadDir)
            fs.writeFile(uploadDir, buffer,(err) => {
              if(err) {
                console.log(err)
              }else{
                console.log("file uploaded")
              }
            })
            return {filepath: uploadDir, filename: file.name}
          })
          ))
          const allBuffer =  await Promise.all(multipleBuffersPromise)
      console.log(allBuffer)
      
    const photos = await UploadImage(allBuffer)
    console.log(photos)
    const infoImg = []
    photos.map((photo) => {
      infoImg.push({
        nom:photo.original_filename,
        img:photo.secure_url,
        publicId:photo.public_id
      })
    })
    // console.log('photos :',photos)
    // console.log('info :',infoImg)

    
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
              data: infoImg.map((img) => ({
                nom: img.nom,
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
  
}