import React from 'react'
import { useNavigate } from "react-router-dom";

function Logoutbtn() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        console.log("logout");
        navigate("/")
        localStorage.removeItem("user");
    }

  return (
    <button className='logout-btn' onClick={handleClick}>logout</button>
  )
}

export default Logoutbtn