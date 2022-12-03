import React from "react";
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { DeleteProducts, GetProducts } from "../Redux/action";
const ProductCard = ({ id, category,imageSrc,price,title}) => {
 const dispatch=useDispatch()
  const deletehandle=(id)=>{
    console.log(id)
dispatch(DeleteProducts(id)).then((res)=>{
  dispatch(GetProducts())
})
  }
  
  
  
  return (
    <div data-cy={`product-card-${id}`} style={{border:"2px solid ",paddingBottom:"20px"}}>
      <div data-cy="product-card-name">{title}</div>
      <div data-cy="product-card-category">{category}</div>
      <div>
        <img data-cy="product-card-image" width="280px" height="250px" src={imageSrc} alt="Product" />
      </div>
      <div data-cy="product-card-price">€ {price}</div>
      <div  style={{display:"flex",justifyContent:"space-between"}}>
        {/* Add a onClick handler for delete functionality */}
        <button data-cy="delete-button" onClick={()=>{
          deletehandle(id)}}>Delete Product</button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
       <Link to={`/edit/${id}`}><button data-cy="edit-button" >Edit Product</button> </Link> 
      </div>
    </div>
  );
};

export default ProductCard;
