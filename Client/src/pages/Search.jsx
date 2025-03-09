import { useState } from "react";
import Categories from "../Utils/Categories"

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
  textlign:"center",
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

  fetch("http://localhost:4040/dashboard/search")
  .then(res=>res.json())
  .then(data=>setData(data.data))

  const handleChange=(e)=>{
    setInputData(e.target.value)
  }
  
  const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(inputData)
  }
  return (
    <div>
      <form action="" style={formStyling} onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Podcast/ Artist .." name="category" style={inputStyling} onChange={handleChange}/>
        <button type="submit" style={buttonStyling}>Search</button>
      </form>
      <h2 style={headingStyling}>Browse All</h2>
      <p>Your search : {inputData}</p>
      <p>{data}</p>
      <Categories/>
    </div>
  )
}

export default Search
