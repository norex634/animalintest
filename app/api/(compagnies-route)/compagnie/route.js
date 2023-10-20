import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const compagnie = await prisma.compagnie.findFirst({
            include: { social: true, horaire: true }
        });

        if (!compagnie) {
            return NextResponse.json({ compagnie: [] }, { status: 200 });
        }

        return NextResponse.json( compagnie , { status: 200 });
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération de la compagnie:", error);
        return NextResponse.error("Erreur lors de la récupération de la compagnie", { status: 500 });
    }
}