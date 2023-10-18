import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const users = await prisma.user.findMany();
        // if (!users || users.length === 0) {
        //     return NextResponse.json({ users: [] }, { status: 200 });
        // }
        return NextResponse.json( users , { status: 200 });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des utilisateurs:", error);
        return NextResponse.error("Erreur lors de la récupération des utilisateurs", { status: 500 });
    }
}