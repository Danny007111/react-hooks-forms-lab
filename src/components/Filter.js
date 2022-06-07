import React, {useState} from "react";

function Filter({ onCategoryChange }) {

  

  // function onSearchChange (event){
  //   setSearch(event.target.value);
  // }
  // };

  // function change(val){
    
    // if(searchTerm == ""){
    //   return val;
    // }else if(val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
    //   return val;
    // }
  // };

  return (
    <div className="Filter" >
      <input type="text" name="search" placeholder="Search..." />

      <select name="filter" onChange={onCategoryChange}>

        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>

      </select>
    </div>
  );
}

export default Filter;
