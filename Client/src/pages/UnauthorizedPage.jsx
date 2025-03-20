import { Height } from "@mui/icons-material";
import React from "react";


let divStyling={
    height:"100vh",
    textAlign:"center",
    alignItems:"center"
}

const Unauthorized = () => {
  return (
    <div style={divStyling}>
      <h1 >Unauthorized</h1>
      <p>You are not authorized to access this page.</p>
    </div>  
  );
};

export default Unauthorized;
