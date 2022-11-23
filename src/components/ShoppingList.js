import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [category, setCategory] = useState('ALL') 

function handleCategory(e){
  setCategory(e.target.value)
  // console.log(e.target.value)
}

const itemsToDisplay = items.filter((item) =>{
  if (category === 'ALL'){
    return true
  }else {
    return item.category === category
  }
})


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
