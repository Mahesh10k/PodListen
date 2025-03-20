let express=require("express")
let app=express()
let cors=require("cors")
let dashboardRoutes=require("./Routes/dashboardRoutes")
const connectDB = require("./Config/Mongodb");
const dotenv = require("dotenv");
dotenv.config();
connectDB()

app.use(express.json())


var whitelist = ['https://pod-listen.vercel.app', 'https://localhost:5173', 'https://pod-listen-nydm9vipa-mahesh10ks-projects.vercel.app']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true}))





  app.use("/dashboard",dashboardRoutes) 
  
app.listen(process.env.PORT,()=>{
    console.log("server started on port 4040")
})

