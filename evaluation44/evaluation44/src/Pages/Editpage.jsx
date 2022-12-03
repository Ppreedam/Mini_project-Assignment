import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { GetProducts, UpdatedProducts } from '../Redux/action';
import {useNavigate} from "react-router-dom"
const Editpage = () => {
  const [title,setTitle]=useState("")
  const [price,setprice]=useState("")
  
  const {id}=useParams()
const naviagte=useNavigate()
  const dispatch=useDispatch()
  const product =useSelector((store)=>store.products)
  useEffect(()=>{
    if(product.length===0)
    {
  
      dispatch(GetProducts())
    }
   
  },[product.length])

  useEffect(()=>{
    if(id && product.length>0)
    {
     
      const current=product.find((el)=>el.id==id);

     if(current)
     {
    setTitle(current.title)
    setprice(current.price)
     }
      
    }
    },[id,product])
  
    const handleclick=()=>{
      if(title && price)
      {
        const payload={
          title:title,
          price:price
        }
     
     dispatch(UpdatedProducts(id,payload)).then((res)=>{
      dispatch(GetProducts())
      naviagte("/")
     })
      }
    }
  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input data-cy="edit-product-title" type="text" value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }} />
      </div>
      <div>
        <label>Product Price</label>
        <input data-cy="edit-product-price" type="number" value={price} onChange={(e)=>{
          setprice(e.target.value)
        }}/>
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button" onClick={handleclick} >Update</button>
      </div>
    </div>
  );
};

export default Editpage;
