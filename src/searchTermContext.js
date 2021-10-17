import React , {createContext , useState} from "react";


export const SearchTermContext = createContext();

export const SearchTermProvider = (prop) => {
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <SearchTermContext.Provider value={[searchTerm, setSearchTerm]}>
            {prop.children}
        </SearchTermContext.Provider>
    )
}
