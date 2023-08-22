import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory]=useState("All");
 

  
  function handleFilter(e){
    setSelectedCategory(e.target.value);
  }
  const data = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });
  const mydata = data.map((item) => {
    return <Item key={item.id} name={item.name} category={item.category} id={item.id}/>;
  });
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
          {mydata}
      </ul>
    </div>
  );
}

export default ShoppingList;