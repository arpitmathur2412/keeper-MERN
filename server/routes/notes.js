const express=require("express")
const mongoose=require("mongoose")
const fetchuser=require("../middleware/fetchuser")
const notesschema=require("../models/Notes")
const { body, validationResult } = require('express-validator');
const router=express.Router();


const Notes=mongoose.model("Notes",notesschema)
Notes.createIndexes()

router.get("/fetchnotes",fetchuser,async (req,res)=>{
    const userid=req.user.id;
    const notes=await Notes.find({userid:userid})
    res.json(notes)
})

router.post("/createnote",fetchuser,
    body('title').exists(),
    body('description').exists(),
    
    async (req,res)=>{
        const errors=validationResult(req) 
        const {title,description,tag}=req.body
        const note= await Notes.create({
            title,description,tag,userid:req.user.id
        })
        res.json(note)
})

router.delete("/deletenote",fetchuser,
async (req,res)=>{
    const userid=req.user.id;
    let note=await Notes.find({userid:userid})
    if(!note){
        res.status(500).send("No notes present to delete")
    }
    else{
    await Notes.deleteOne({userid:userid,title:req.body.title,description:req.body.description,tag:req.body.tag})
    res.send("deleted the note successfully")
    }
})

// update an existing note using a PUT: /api/notes/updatenote

router.put("/updatenote/:id",fetchuser,
    async (req,res)=>{ 
        const {title,description,tag}=req.body;
        const newnote={}
        if(title){newnote.title=title}
        if(description){newnote.description=description}
        if(tag){newnote.tag=tag}
       
        let note=await Notes.findById(req.params.id)
        
        if(!note){
            res.status(404).send("Page not found")
        }
        if(note.userid.toString()!=req.user.id){
            res.status(501).send("Acess denied");
        }
        note=await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true});
        res.json(note);

})



module.exports=router