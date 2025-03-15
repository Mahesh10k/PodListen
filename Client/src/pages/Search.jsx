import { useEffect, useRef, useState } from "react";
import Categories from "../Utils/Categories"
import MyLoader from "../Utils/SkeletonLoader";
import { useNavigate } from "react-router";
import "./dashboard.css"

const inputStyling = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  width: '30vw',
  marginRight: '10px',
};

const buttonStyling = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#AA60C8',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const formStyling={
  textAlign:"center",
  display:"block",
  margin:" 1rem 7rem",
}
const headingStyling={
  textAlign:"start",
  margin:"2rem 7rem"
}
const Search = () => {
  const [data,setData]=useState(null)
  const [inputData,setInputData]=useState("")

  
  const handleChange=(e)=>{
    setInputData(e.target.value)
  }
  
  const handleSubmit=(e)=>{
      e.preventDefault()
  }

  let navigate = useNavigate();
  const openPodcast = (id) => {
    navigate(`../podcast/${id}`);
  };

    useEffect(()=>{
      fetch(`https://podlisten.onrender.com/dashboard/title/${inputData}`)
      .then(res=>res.json())
      .then(data=>setData(data))
      console.log(data)
    },[inputData])
  
  return (
    <div>
      <form action="" style={formStyling} onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Podcast by Title .."
        name="category" 
        style={inputStyling} 
        onChange={handleChange}/>
        <button type="submit" style={buttonStyling}>Search</button>
      </form>
      <h2 style={headingStyling}>Browse All</h2>
      {
        data && (
          <div className="podcast-container">
        {data === null ? (
          <MyLoader/>
        ) : (
          data.map((value) => (
            <div
              key={value._id}
              className="podcast-card"
              onClick={() => openPodcast(value._id)}
            >
              <div
                className="audio-details"
                style={{ backgroundImage: `url(${value.thumbnailUrl})` }}
              >
                {/* <audio controls>
                  <source type="audio/mp3" src={value.audioUrl} />
                </audio> */}
              </div>
              <div className="podcast-details">
                <h5>{value.title}</h5>
                <p>{value.createdAt.split("T")[0]}</p>
              </div>
            </div>
          ))
        )}
      </div>
        )
      }
      <Categories loggedin={true}/> 
    </div>
  )
}

export default Search
