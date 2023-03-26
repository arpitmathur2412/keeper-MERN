const mongoose=require("mongoose");

const notesschema=mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        requred:true
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now

    }
})
module.exports=notesschema