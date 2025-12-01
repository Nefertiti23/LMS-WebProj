 import React from "react";
import "./SearchBar.css";

function SearchBar({
  search,setSearch,instructorFilter,setInstructorFilter,
maxPrice,
  setMaxPrice
}) {
  return (
    <div className="search_bar">
      <input
        type="text"
        placeholder="Search Courses ."
        className="search_input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> 
      <select
        className="filter_select" value={instructorFilter}
        onChange={(e) => setInstructorFilter(e.target.value)}
      >
        <option value="">All Instructors</option>
        <option value="Rija Ahsan">Rija Ahsan</option>
        <option value="David Kamran">David Kamran</option>
         <option value="Bushra Jabeen">Bushra Jabeen</option>
          <option value="Izaz Hassan">Izaz Hassan</option>
         <option value="Ayesha Ali ">Ayesha Ali </option>
        <option value="Shumaila Javed">Shumaila Javed</option>
      </select> 
      <input
  type="number" placeholder="Max Price"
  className="price_input"
        value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;