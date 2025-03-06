

const divStylings={
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center",
    height:"50vh",
    alignItems:"center",
    gap:"1rem"
}
const buttonDivStyling={
    display:"flex",
    gap:"2rem"
}
const buttonStyling={
    borderRadius:"10px",
    padding:"5px 10px",
    backgroundColor:"#AA60C8"
}
const Profile=()=>{
    return(
        <div style={divStylings}>
        <h3>Do You Want to Logout ?</h3>
        <div style={buttonDivStyling}>
            <button style={buttonStyling}>Yes</button> 
            <button style={buttonStyling}>No</button>
        </div>
        </div>
    )
}
export default Profile