const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    //passport-local-mongoose by default adds a username,hash and salt field to store the username.

});

userSchema.plugin(passportLocalMongoose); 

module.exports = mongoose.model('User', userSchema);
