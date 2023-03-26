const express=require("express");
const body_parser=require("body-parser");
const mongoose=require("mongoose");

const app=express();

app.use(express.json())
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1/keeperdb",{useNewUrlParser:true});

app.use(body_parser.urlencoded({extended:true}));




app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))


app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(5000,()=>{
    console.log("server started at http://localhost:5000");
})
