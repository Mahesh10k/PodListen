import { useEffect, useState } from "react"
import { useParams } from "react-router"
import "./Dashboard.css"

const PodcastDetails = () => {
  const [podcast, setPodcast]=useState(null)
  let {id}=useParams()


  useEffect(()=>{
      fetch(`http://localhost:4040/dashboard/podcast/${id}`)
      .then(res=>res.json())
      .then(data=>setPodcast(data))
  },[])

  // console.log(podcast)

  return (
    
      podcast &&
      (<div key={podcast[0]._id} className="podcast-card" style={{margin:"1rem auto"}}>
          <div className="audio-details" style={{backgroundImage:`url(${podcast[0].thumbnailUrl})`}} >
            <audio controls>
              <source type="audio/mp3" src={podcast[0].audioUrl}/>
            </audio>
          </div>
          <div className="podcast-details">
            <h5>{podcast[0].title}</h5>
            <p>{podcast[0].createdAt.split("T")[0]}</p>
          </div>
          </div>) 
    
  )
}

export default PodcastDetails


 