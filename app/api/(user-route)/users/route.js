import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const user = await prisma.User.findMany({

    });

        return NextResponse.json(user)
    
}