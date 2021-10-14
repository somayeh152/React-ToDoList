import React from "react";
import './search.scss';

function Search({ searchTerm , setSearchTerm }) {
    return(
        <div className='search'>
          <input type="text" placeholder="Search a task" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
    )
}

export default Search;