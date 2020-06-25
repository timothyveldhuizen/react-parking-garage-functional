import React from 'react';

function SearchFilter(props) {
    const parkingType = [
        { A: 'Administratief adres' },
        { P: 'Postadres' },
        { F: 'Feitelijk adres' },
    ];

    function handleParkingTypeFilterChange(e) {
        props.onSearchFilterChange(e.target.value, e.target.checked);
    }

    function isChecked(item) {
        return props.searchFilter[item] ? props.searchFilter[item] : false;
    }

    const filterTypes = parkingType.map(
        item => {
            const keys = Object.keys(item);
            const values = Object.values(item);
            return <>
                <label for={`searchfilter-${keys}`}>{values}</label>
                <input type="checkbox" id={`searchfilter-${keys}`} value={keys} checked={isChecked(keys)} onChange={handleParkingTypeFilterChange} />
            </>
        }
    );

    return (
        <>
            {filterTypes}
        </>

    );
}

export default SearchFilter;