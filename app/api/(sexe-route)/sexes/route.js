import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const sexes = await prisma.sexe.findMany({
            include: { animal: true },
        });

        return NextResponse.json(sexes);
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des sexes :", error);
        return NextResponse.error("Erreur lors de la récupération des sexes", { status: 500 });
    }
}