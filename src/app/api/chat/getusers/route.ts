import { auth } from "@/auth";
import { ConnectDB } from "@/db/db_config";
import UserModel from "@/models/user.model";
import { UserDocumentType } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {
    try {
        const authUser = await auth();
        if(!authUser) return;

        await ConnectDB()
        const users : UserDocumentType[] = await UserModel.find({ _id: { $ne: authUser.user?._id } })
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching users");
    }
}