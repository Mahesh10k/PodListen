import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  
  function SuccessModal({operation, msg}){
    useEffect(()=>{
      toast[operation](msg, { autoClose: 3000 ,position: "top-center"});
    },[])

    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
  export default SuccessModal;