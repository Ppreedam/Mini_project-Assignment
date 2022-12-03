import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate=useNavigate()

  return (
    <div>
      <div>Product Dashboard</div>
      <div style={{display:"flex",justifyContent:"end" ,marginRight:"20px",marginBottom:"20px"}}>
        {/* Link the button to the /add route, when the user clicks on the button */}
        <button data-cy="add-product-navbar-button" onClick={()=>{
          navigate("/add")
        }}>Add Product</button>
      </div>
    </div>
  );
};

export default Navbar;
