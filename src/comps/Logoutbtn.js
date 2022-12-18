import React from 'react'
import { useNavigate } from "react-router-dom";

function Logoutbtn() {
    const navigate = useNavigate();

    const handleClick = (e) => {
      e.preventDefault();
      if (window.confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("user");
        navigate("/")
      } else {
        navigate("/gallery")
      }
      
    }

  return (
    <button className='logout-btn' onClick={handleClick}>logout</button>
  )
}

export default Logoutbtn