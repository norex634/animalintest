import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const faq = await prisma.Faq.findMany({

    });

    return NextResponse.json(faq)
    
}

export async function POST(req, res) {

    const { question, reponse, link } = await req.json();

    const newFaq = await prisma.faq.create({
      data: {
        question: question,
        reponse: reponse,
        link: link,
      },
    });

    console.log("ma faq envoiée : ",newFaq)
    return NextResponse.json("send")
  }