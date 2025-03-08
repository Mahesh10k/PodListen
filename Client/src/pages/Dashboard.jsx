
import { useEffect, useState } from "react";
import Categories from "../Utils/Categories";

const Dashboard = () => {
  const [data,setData]=useState(null)
  
  fetch("http://localhost:4040/dashboard/")
  .then(res=>res.json())
  .then(data=>setData(data.data))

  return (
    <div>
      <h3>Choose Your Category..</h3>
      <p>{data}</p>
      <Categories/>
    </div>
  );
};

export default Dashboard;
