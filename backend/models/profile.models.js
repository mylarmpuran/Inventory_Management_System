import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    refresh_token:{
        type:String,
        default:''
    },timestamps:true

})

const Profile = mongoose.model("Profile",profileSchema)

export default Profile;