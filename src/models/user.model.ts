import mongoose, { Schema } from "mongoose";
import { UserDocumentType } from "@/types";

const UserSchema : Schema<UserDocumentType> = new mongoose.Schema({
    username : {
        type : String,
        required: true,
        unique : true
    },
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true,
        unique : true
    },
    profilePhoto : {
        type : String,
        default : ""
    }

}, {timestamps : true})

const UserModel = (mongoose.models.User as mongoose.Model<UserDocumentType>) || (mongoose.model<UserDocumentType>("User", UserSchema))

export default UserModel