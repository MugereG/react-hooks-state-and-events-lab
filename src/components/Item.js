import React, { useState } from "react";



function Item({ name, category , id}) {



  const[cart, setCart]=useState([])


  const[cartClass, setCartClass]=useState("")


  function handeItem(e){

   let data={
    "id":id,
    "name":name,
    "category": category    
   }

   
   if(cart.map(obj => obj.id).includes(id)){
    let newCart=cart.filter(obj => obj.id !== id)
    setCart(newCart)
    let newClass=""
    setCartClass(newClass)
   }else{
    let newCart=[...cart, data]
    setCart(newCart)
    let newClass="in-cart"
    setCartClass(newClass)
   }
  }

  
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartClass} onClick={handeItem}>{cartClass === "in-cart"? "Add to Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;