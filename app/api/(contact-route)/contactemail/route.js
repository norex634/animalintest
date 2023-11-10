import { Resend } from 'resend';
import { NextResponse } from "next/server";

export async function POST(req, res) {

    const resend = new Resend('re_DttZpujQ_3HndEuwuKHL99TwJJJoyvYFX');

    const data  = await req.json();
    console.log(data)
    
    resend.emails.send({
        from: data.emails,
        to: 'norex.flo@gmail.com',
        subject: 'Contact de animalin web',
        html: 
        `
            <p>Congrats on sending your <strong>email ${data.nom}</strong>!</p>
            </br>
            <p>Here's what you sent:</p>
            </br>
            <p>${data.message}</p>
        `
      });
    return NextResponse.json("Message envoyer");
}