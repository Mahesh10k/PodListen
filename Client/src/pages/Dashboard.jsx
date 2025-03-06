import Categories from "../Utils/Categories"
import { useEffect, useState } from "react"


const styling={
  textAlign:"center",
  margin:"0.6rem auto"
}
const Dashboard = () => {
  const [data,setData]=useState("")
  useEffect(()=>{
    fetch("http://localhost:5173/dashboard")
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  // console.log(data)
  return (
    <div >
      <h3 style={styling}>Choose Your Category..</h3>
      <p>{data ? data :"Loading"}</p>
      <Categories loggedin={true}/>
    </div>
  )
}

export default Dashboard
