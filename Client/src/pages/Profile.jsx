import Logout from "./Logout.jsx"

const Imagestyling={
  height:"60px",
  width:"60px",
  display:"block",
  margin:"0.5rem auto",
  borderRadius:"50%"
}

const Profile = () => { 
  return (
    <div>
      <h3>My Profile</h3>
      <img style={Imagestyling} src={localStorage.getItem("ProfilePic")} alt="Profile" />
      <h5>Name: {localStorage.getItem("userName")}</h5>
      <Logout/>
    </div>
  )
}

export default Profile
