import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  AuthorName:{type: String, required:true},
  email: {type: String, required:true, unique:true},
  password:{type:String, required:true},
  PhoneNumber: {type: String, required : true}
},{
    timestamps:true
});

// export const User = mongoose.model<UserType>('User', userSchema)
const User = mongoose.model('User', userSchema)
module.exports = User

















