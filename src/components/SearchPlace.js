import React from 'react';

function SearchPlace(props) {
    function handleSearchTextChange(e) {
        props.onSearchInputChange(e.target.value)
    }

    return (
        <div>
            <label for="searchplace">Search place</label>
            <input type="text" id="searchplace" value={props.searchInput} onChange={handleSearchTextChange}/>
        </div>
    );
}

export default SearchPlace;