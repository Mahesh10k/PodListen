import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "../App.css"
  
  function SuccessModal({operation, msg}){
    useEffect(()=>{
      toast[operation](msg, { autoClose: 3000 ,position: "top-center"});
    },[])

    return (
      <div>
        <ToastContainer className="success-modal-message"/>
      </div>
    );
  }
  export default SuccessModal;