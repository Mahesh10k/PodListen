let express=require("express")
let cors=require("cors")
let app=express()
let port=5173

app.use(cors())

app.get("/dashboard",(req,res)=>{
    res.send({data:"this is data in the dashboard which is coming from backend"})
})

app.listen(port,()=>{
    console.log("server started successfully")
})