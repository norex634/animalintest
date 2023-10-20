import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const compagnies = await prisma.compagnie.findFirst({
            include: { social: true, horaire: true },
        });

        if (!compagnies) {
            return NextResponse.json({ compagnies: [] }, { status: 200 });
        }

        return NextResponse.json( compagnies , { status: 200 });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération de la compagnie:", error);
        return NextResponse.error("Erreur lors de la récupération de la compagnie", { status: 500 });
    }
}