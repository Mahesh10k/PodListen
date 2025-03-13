import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import "./dashboard.css"
import MyLoader from "../Utils/SkeletonLoader"

const DisplayPodcasts = () => {
  const [data, setData]=useState(null)

  const {category}=useParams()

  useEffect(()=>{
    fetch(`http://localhost:4040/dashboard/search/category/${category}`) 
      .then(res=>res.json())
      .then(data=>setData(data))
  },[])

  let navigate=useNavigate()
  let openPodcast=(id)=>{
    navigate(`../podcast/${id}`)
  }

  // console.log(data)

  return (
    <div>
      <h3>Searched Category : {category}</h3>
      
      <div className="podcast-container">
        {data === null ? (
          <MyLoader/>
        ) 
        : 
        (data.length>0 ? (
          data.map((value) => (
            <div
              key={value._id}
              className="podcast-card"
              onClick={()=>{openPodcast(value._id)}}
              >
              <div
                className="audio-details"
                style={{ backgroundImage: `url(${value.thumbnailUrl})` }}
              >
                <audio controls>
                  <source type="audio/mp3" src={value.audioUrl} />
                </audio>
              </div>
              <div className="podcast-details">
                <h5>{value.title}</h5>
                <p>{value.createdAt.split("T")[0]}</p>
              </div>
            </div>
          ))
        ) : <h3 style={{height:"50vh",alignContent:"center"}}>No Podcasts Found for Your Required Category {category}</h3>)}
      </div> 
    </div>
  )
}

export default DisplayPodcasts
