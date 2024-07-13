'use server'
import { auth, signOut } from "@/auth";
import { Chat } from "@/models/chat.model";
import { Message } from "@/models/message.model";
import { redirect } from "next/navigation";
import { v2 as cloudinary } from 'cloudinary';
import { ConnectDB } from "@/db/db_config";
import { revalidatePath } from "next/cache";

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

export const sendSnapMessage = async (content : string, receiverId : string, messageType : 'image' | 'text') => {
    try {
        await ConnectDB()   
        const authUser = await auth();
        const senderId = authUser?.user?._id

        let uploadResponse
        if(messageType === 'image'){
            uploadResponse = await cloudinary.uploader.upload(content)
        }

        const newMessage : any = await Message.create({
            senderId,
            receiverId,
            messageType,
            content : uploadResponse?.secure_url || content
        })

        let chat = await Chat.findOne({
            participants : {$all : [senderId, receiverId]}
        })

        if(!chat){
            chat = await Chat.create({
                participants : [senderId, receiverId],
                messages : [newMessage._id]
            })
        }else{
            chat.messages.push(newMessage._id)
            await chat.save()
        }

        revalidatePath(`/chat/${receiverId}`)
        return JSON.parse(JSON.stringify(newMessage))

    } catch (error) {
        console.log(error)            
        throw error        
    }
}

export const DeleteChat = async (UserId : string) => {
    try {
        await ConnectDB()
        const authUser = await auth();
        if(!authUser){
            throw new Error("User not authenticated")
            return
        }

        const chat = await Chat.findOne({
            participants : {$all : [UserId, authUser?.user?._id]}
        })

        if(!chat){
            return
        }

        const messageinString = chat.messages.map((id) => id.toString())

        await Message.deleteMany({
            _id : {$in : messageinString}
        })
        await Chat.deleteOne({_id : chat._id})

        revalidatePath(`/chat/${UserId}`)

    } catch (error) {
        console.log(error)            
        throw error        
    }
    redirect('/chat')
}

export const logoutHandler = async () => {
    try {
        await signOut();
    } catch (error) {
        console.log(error);
        throw error
    }
    redirect('/login')
}