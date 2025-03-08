let express=require("express")
let app=express()
let cors=require("cors")
let dashboardRoutes=require("../Routes/dashboardRoutes.js")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use("/dashboard",dashboardRoutes)

app.listen(4040,()=>{
    console.log("server started on port 4040")
})

