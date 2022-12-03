import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const Sidebar = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const initialvalue=searchParams.get("Order")
 
  const [order,setOrder]=useState(initialvalue ||"")
  const filterHandle=(e)=>{

    setOrder(e.target.value)
      }

      useEffect(()=>{
        if(order){
          setSearchParams({Order:order})
        }
      },[order,setSearchParams])
  return (
    <div style={{ minWidth: "250px" }}>
      <h3>Sort By</h3>
      <div>
        <div>
          <input type="radio" data-cy="asc" value="asc" onChange={filterHandle}  checked= {order==="asc" ? true :false}/>
          <label>Ascending</label>
        </div>
        <div>
          <input type="radio" data-cy="desc" value="desc" onChange={filterHandle}  checked= {order==="desc" ? true :false} />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
