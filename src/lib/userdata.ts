import { ConnectDB } from "@/db/db_config"
import { Message } from "@/models/message.model"
import User from "@/models/user.model"
import { UserDocumentType } from "@/types"

export const getSideBarUsers = async (LoggedInUserId : string) => {
    try {
        await ConnectDB()
        
        const OtherUsers = await User.find({_id : {$ne : LoggedInUserId}})

        const userInfo = await Promise.all(
            OtherUsers.map(async (user) => {
                const lastMessage = await Message.findOne({
                    $or : [
                        {senderId: LoggedInUserId, receiverId : user._id},
                        {senderId: user._id, receiverId : LoggedInUserId}
                    ]
                }).sort({createdAt : -1})
                .populate('senderId', 'fullname profilePhoto _id')
                .populate('receiverId', 'fullname profilePhoto _id')
                .exec()

                return {
                    _id : user._id,
                    participants : [user],
                    lasMessage : lastMessage ? 
                    {
                        ...lastMessage.toJSON(),
                        senderId : lastMessage.senderId,
                        receiverId : lastMessage.receiverId
                    } : null
                }
            })
        )

        return userInfo

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getProfileUser = async (userId : string) => {
    try {
        await ConnectDB()
        const user : UserDocumentType | null = await User.findById(userId)
        if(!user) return ('User not found')
        return JSON.parse(JSON.stringify(user))
    } catch (error) {
        console.log(error)
        throw error
    }
}