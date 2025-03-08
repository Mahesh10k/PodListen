import { Padding } from "@mui/icons-material"
import Logout from "./Logout.jsx"

const imageStyling={
  height:"60px",
  width:"60px",
  display:"block",
  margin:"0.5rem auto",
  borderRadius:"50%"
}
const profileStylings={
    display:"flex",
    flexDirection:"column",
    gap:"1.5rem",
    Padding:"1rem",
    width:"20vw",
    height:"30vh",
    boxShadow:"2px 2px 3px gray", 
    margin:" 3rem auto"
} 

const Profile = () => { 
  return (
    <div>
      <div style={profileStylings}>
      <h3>My Profile</h3>
      <img style={imageStyling} src={localStorage.getItem("ProfilePic")} alt="Profile" />
      <h5>{localStorage.getItem("userName")}</h5>
      </div>
      <Logout/>
    </div>
  )
}

export default Profile
