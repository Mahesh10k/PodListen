import { useState } from "react"

const Trending = () => {
  const [data,setData]=useState(null)

  fetch("http://localhost:4040/dashboard/trending")
  .then(res=>res.json())
  .then(data=>setData(data.data))
  return (
    <div>
      Trending Podcast here
      <p>{data}</p>
    </div>
  )
}

export default Trending
