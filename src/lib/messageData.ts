// 'use server'
import { ConnectDB } from "@/db/db_config";
import { Chat } from "@/models/chat.model"

export const getMessage = async (LoggedInUserId : string, OtherUserId : string) => {
    try {
        await ConnectDB()
         const chatMessage = await Chat.findOne({
            participants:{$all:[LoggedInUserId, OtherUserId]}
         }).populate({
            path:'messages',
            populate:{
                path:'senderId',
                model:'User',
                select:'fullname'
            }
         });
         if(!chatMessage) return []; 

         return JSON.parse(JSON.stringify(chatMessage.messages)) ;

    } catch (error) {
        console.log(error)
        throw error        
    }
}