import { auth } from "@/auth";
import { ConnectDB } from "@/db/db_config";
import User from "@/models/user.model";
import { UserDocumentType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const authUser = await auth();
        if (!authUser) {
            return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
        }

        await ConnectDB(); // Ensure database connection
        const users: UserDocumentType[] = await User.find({ _id: { $ne: authUser.user?._id } });

        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
    }
}
