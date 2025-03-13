import { Category } from "./Data.jsx"
import "../App.css"
import { useNavigate } from "react-router"

const containerStyling={
  display:"flex",
  justifyContent:"center", 
  alignItems:"center",
  flexWrap:"wrap"
  }

const ImageStyling={
  height: "80px",
  width: "80px",
  marginRight: "1rem",
  borderRadius: "50%",
  objectFit: "cover",
}

const h2Styling={
  margin: 0,
  // color: "white",
  fontSize: "1.25rem",
  fontWeight: 600,
  textShadow: "0 1px 2px rgba(233, 225, 225, 0.2)",
  backgroundImage: "linear-gradient(to left,rgb(154, 128, 223),rgb(139, 75, 129))",
  // color: "transparent",
  backgroundClip: "text",
}


const Categories = ({loggedin}) => {
  
  let navigate=useNavigate()
  return (
    <div style={containerStyling}>
        {Category.map((value, index) => {
          return (
            <div
              key={index}
              style={{backgroundColor: value.color}}
              className="category-card"
              onClick={()=>{!loggedin ? navigate("/login") : navigate(`/dashboard/category/${value.name.toLowerCase()}`)} }
            >
              <img
                src={value.img}
                alt={`${value.name} category`}
                style={ImageStyling}
              />
              <h2
                style={h2Styling}
              >
                {value.name}
              </h2>
            </div>
          );
        })}
      </div>
  )
}

export default Categories


