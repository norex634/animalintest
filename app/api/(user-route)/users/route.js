import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function GET(req, res) {
    try {
        const users = await prisma.user.findMany({});
        if (!users) {
            return NextResponse.json({ users: [] }, { status: 200 });
        }
        //console.log(users)
        return NextResponse.json( {users} , { status: 200 });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des utilisateurs:", error);
        return NextResponse.error("Erreur lors de la récupération des utilisateurs", { status: 500 });
    }
}

export async function POST(req, res) {
  const {nom,prenom,email,password} = await req.json();
  const hashedpassword = await bcrypt.hash(password,10)
  
      const newuser = await prisma.user.create({
        data:{
          nom:nom,
          prenom:prenom,
          email:email,
          password:hashedpassword,
          role:"ADMIN",
          image:"imageadmin"
        }
      });
      console.log("mon user envoiée : ",newuser)
      return NextResponse.json("send")
}

export async function PATCH(req, res) {
  
    const {nom, prenom, email, role,userId}  = await req.json();
    
      const patchUser = await prisma.user.update({
        
        where: {
          id : userId
        },
        data: {
            nom: nom,
            prenom : prenom,
            email : email,
            role: `${role}`,
        },
      });
  
      console.log("mon User envoiée : ", patchUser)
      return NextResponse.json("send")
  
    }