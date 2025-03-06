import { useNavigate } from "react-router"
import SuccessModal from "../Utils/SuccessModal"
import { useState } from "react"
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
    const [toastMessage, setToastMessage] = useState(null);
    let navigate=useNavigate()
    const handleLogout=()=>{
        setToastMessage({ operation: "success", msg: "Logout Sucess.." });
        setTimeout(()=>{
            navigate("/")
        },3000)
    }
    return(
        <div style={divStylings}>
        <h3>Do You Want to Logout ?</h3>
        <div style={buttonDivStyling}>
            <button style={buttonStyling} onClick={handleLogout}>Yes</button> 
            {toastMessage && <SuccessModal operation={toastMessage.operation} msg={toastMessage.msg} />}
            <button style={buttonStyling}>No</button>
        </div>
        </div>
    )
}
export default Profile