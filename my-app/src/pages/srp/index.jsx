import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleSearch = event => {
        event.preventDefault();
        dispatch({ type: "SEARCH_DATA", payload: searchTerm });
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search for a name"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
