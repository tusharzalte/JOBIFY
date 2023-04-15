import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from "bcryptjs";
import jwt  from 'jsonwebtoken';
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter name'],
        minLength:3,
        maxlength:20,
        trim:true,
    },
    password:{
        type:String,
        required:[true,'please enter a password'],
        minLength:6,
        select:false,
    },
    email:{
        type:String,
        required:[true,'please enter Email'],
        validate:{
            validator: validator.isEmail ,
            message:"please provide a valid email"
        },
        unique:true
    },
    lastName:{
        type:String,
        default:'LastName'
    },
    location:{
        type:String,
        default:'my city'
    }
});

userSchema.pre('save',async function(){
    // console.log(this.modifiedPaths());  //which value we updated 
    if(!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10);
    this.password  = await bcrypt.hash(this.password,salt)
})

userSchema.methods.createJWT = function(){
    return jwt.sign({userId:this._id},process.env.JWT_SECRET,
        {expiresIn:process.env.JET_LIFETIME})
}

//compare password
userSchema.methods.comparePassword = async function(candidatePassword){
    const ismatch = await bcrypt.compare(candidatePassword,this.password);
    return ismatch
}
export default mongoose.model('User',userSchema);