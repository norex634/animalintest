import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { getToken } from "next-auth/jwt"




export async function PATCH(req, res) {
  const token = await getToken({ req })
  console.log("token : ",token)
  if (token) {
    const session = await getServerSession();
    if (session && session.userId) {
      
    }else{
        return NextResponse.redirect('/login')
    }
  
    const {nom, prenom, email ,userId, password, newPassword}  = await req.json();
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    // ash du password donné actuellement 
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return NextResponse.json("ancien mot de passe incorrect")
    }

    // hash du nouveau password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    

        const patchUser = await prisma.user.update({
            where: {
              id: userId,
            },
            data: {
              nom: nom,
              prenom: prenom,
              password: hashedPassword,
            },
            
          });
          console.log("mon User envoiée : ", patchUser)
    
  
      return NextResponse.json("send")
    } else {
      // Not Signed in
      console.log("Unauthorized")
      return NextResponse.json("else token")
    }
    }