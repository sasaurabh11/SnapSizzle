'use server'
import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export const logoutHandler = async () => {
    try {
        await signOut();
    } catch (error) {
        console.log(error);
        throw error
    }
    redirect('/login')
}