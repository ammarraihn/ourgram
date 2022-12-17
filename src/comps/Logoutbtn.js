import React from 'react'
import { useNavigate } from "react-router-dom";

function Logoutbtn() {
    const navigate = useNavigate();

    const handleClick = (e) => {
      localStorage.removeItem("user");
      navigate("/")
    }

  return (
    <button className='logout-btn' onClick={handleClick}>logout</button>
  )
}

export default Logoutbtn