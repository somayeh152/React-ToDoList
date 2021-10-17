import React , {useContext} from "react";
import './search.scss';
import { SearchTermContext } from "../../searchTermContext";


function Search() {
    const [searchTerm, setSearchTerm] = useContext(SearchTermContext);

    return(
        <div className='search'>
          <input type="text" placeholder="Search a task" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
    )
}

export default Search;