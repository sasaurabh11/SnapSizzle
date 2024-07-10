import { Document, Types, PopulatedDoc } from "mongoose"

export interface UserType {
    username : string,
    fullname : string,
    email : string,
    profilePhoto : string
}

export interface UserDocumentType extends UserType, Document {
    createdAt : Date,
    updatedAt : Date
}

export interface MessageInterfaceType{
    senderId: Types.ObjectId | PopulatedDoc<UserDocumentType>,
    receiverId: Types.ObjectId | PopulatedDoc<UserDocumentType>,
    content:string,
    messageType: 'text' | 'image',
    opened:boolean
}

export interface MessageDocumentType extends MessageInterfaceType, Document{
    createdAt:Date,
    updatedAt:Date
}

export interface ChatInterface {
    participants:Types.ObjectId[],
    messages:Types.ObjectId[],
}

export interface ChatDocument extends ChatInterface, Document{
    createdAt:Date,
    updatedAt:Date
}
