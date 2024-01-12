import { createContext,useState } from "react";

const SearchContext = createContext()

export const SearchProvider = ({children})=>{
    const [value,setValue] = useState([])

    return (
        <SearchContext.Provider value={{
            value,
            setValue
        }
        }>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext;