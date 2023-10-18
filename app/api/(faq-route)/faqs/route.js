import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

  const faqs = await prisma.Faq.findMany({});

  if (!faqs || faqs.length === 0) {
      return NextResponse.json({ faqs: [] }, { status: 200 })
  }

  return NextResponse.json({ faqs }, { status: 200 })
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
    return NextResponse.json({message : "Faq envoyer"})
  }