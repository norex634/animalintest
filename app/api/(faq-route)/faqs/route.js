import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try{
      const faqs = await prisma.Faq.findMany({});
      if (!faqs) {
        return NextResponse.json({ faqs: [] }, { status: 200 });
      }
      console.log(faqs)
      return NextResponse.json( {faqs} , { status: 200 });
    }catch(error){
      console.error("Une erreur s'est produite lors de la récupération des faq:", error);
      return NextResponse.error("Erreur lors de la récupération des faq", { status: 500 });
    }
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