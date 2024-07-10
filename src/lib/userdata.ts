import { Message } from "@/models/message.model"
import UserModel from "@/models/user.model"

export const getSideBarUsers = async (LoggedInUserId : string) => {
    try {
        
        const OtherUsers = await UserModel.find({_id : {$ne : LoggedInUserId}})

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