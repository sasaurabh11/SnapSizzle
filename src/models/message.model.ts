import mongoose, { Types, Document, Model, PopulatedDoc } from "mongoose"
import { MessageDocumentType } from "@/types";

const messageModel = new mongoose.Schema<MessageDocumentType>({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    content:{
        type:String,
        required:true,
    },
    messageType:{
        type:String,
        required:true,
        enum:['text', 'image']
    },
    opened:{
        type:Boolean,
        default:false
    }
}, {timestamps:true});

export const Message : Model<MessageDocumentType> = mongoose.models?.Message || mongoose.model('Message', messageModel);