const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        require : [true, "Name is required"],
        trim : true
    },
    email:{
        type : String,
        require : [true, "email is required"],
        unique : true
    }
})

module.exports =mongoose.model("User", userSchema)