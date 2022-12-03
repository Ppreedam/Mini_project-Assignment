import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { GetProducts } from "../Redux/action";
import { useSearchParams } from "react-router-dom";
const Productpage = () => {

 const [searchParams, setSearchParams] = useSearchParams()
 const  initialvalue=searchParams.get("Order")
let order=initialvalue
  const dispatch=useDispatch()
  const product =useSelector((store)=>store.products)

  // console.log(order)

  useEffect(()=>{
    if(product.length===0)
    {
      dispatch(GetProducts())
    }

  },[product.length])
 
  useEffect(()=>{
    if(order="asc" )
    {
      const filterProduct= product.sort((a,b)=>{
        return a.price -b.price
      })
      // console.log(filterProduct)
    }
     else if(order="desc" && product.length>0){
      const filterProduct= product.sort((a,b)=>{
        return b.price-a.price
      })
      // console.log(filterProduct)
    }
    
  },[searchParams,product.length])
  return (
    <div style={{ width: "100%" }}>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"20px",}}>
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
        {
          product && product.map((el)=>{
            return <ProductCard key={el.id} {...el}/>
          })
        }
      </div>
    </div>
  );
};

export default Productpage;
