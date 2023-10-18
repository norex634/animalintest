import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    const users = await prisma.User.findMany({});

    if (!users || users.length === 0) {
        return NextResponse.json({ users: [] }, { status: 200 })
    }

    return NextResponse.json({ users }, { status: 200 })
}