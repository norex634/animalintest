import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const faq = await prisma.Faq.findMany({

    });

    return NextResponse.json(faq)
    
}