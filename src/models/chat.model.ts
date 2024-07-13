import mongoose, { Types,Document, Model } from "mongoose";
import { ChatDocument } from "@/types";

const chatModel = new mongoose.Schema<ChatDocument>({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        }
    ]
}, { timestamps: true });


export const Chat : Model<ChatDocument> = mongoose.models?.Chat || mongoose.model("Chat", chatModel)