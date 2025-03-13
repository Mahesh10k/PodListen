let express=require("express")
let app=express()
let cors=require("cors")
let dashboardRoutes=require("./Routes/dashboardRoutes")
const connectDB = require("./Config/Mongodb");
const dotenv = require("dotenv");
dotenv.config();
connectDB()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

// console.log("uri",user)




  app.use("/dashboard",dashboardRoutes) 
  
app.listen(process.env.PORT,()=>{
    console.log("server started on port 4040")
})

