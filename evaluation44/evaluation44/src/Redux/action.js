//Write the action creator functions here
import * as types from "./actionTypes"
import axios from "axios"

const GetProducts=()=>(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_REQUEST})
   return axios.get("  http://localhost:8080/products").
    then((res)=>{
      dispatch({
        type:types.GET_PRODUCTS_SUCCESS,
        payload:res.data
      })
    }).catch(()=>{
       return  dispatch({
             type:types.GET_PRODUCTS_FAILURE
        })
    })
}

const UpdatedProducts=(id,payload)=>(dispatch)=>{
  
    dispatch({type:types.EDIT_PRODUCT_FAILURE})
   return axios.patch(`http://localhost:8080/products/${id}`,payload).
  then((res)=>{
  dispatch({type:types.EDIT_PRODUCT_SUCCESS})
  }).catch(()=>{
    dispatch({type:types.EDIT_PRODUCT_FAILURE})
  })
  }

 const AddProducts=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_PRODUCT_REQUEST})
    return axios.post("https://zara-mock-server.herokuapp.com/users",payload)
    .then((res)=>{
        dispatch({type:types.ADD_PRODUCT_SUCCESS})
    }).catch(()=>{
        dispatch({type:types.ADD_PRODUCT_FAILURE})
    })
 }

 const DeleteProducts=(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_PRODUCT_REQUEST})
    return axios.delete(`http://localhost:8080/products/${id}`).
  then((res)=>{
  dispatch({type:types.DELETE_PRODUCT_SUCCESS})
  }).catch(()=>{
    dispatch({type:types.DELETE_PRODUCT_FAILURE})
  })
 }


export {
    GetProducts,UpdatedProducts,AddProducts,DeleteProducts
  }