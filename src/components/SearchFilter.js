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
            return <div key={keys.toString()}>
                <label htmlFor={`searchfilter-${keys}`}>{values}</label>
                <input type="checkbox" id={`searchfilter-${keys}`} value={keys} checked={isChecked(keys)} onChange={handleParkingTypeFilterChange} />
            </div>
        }
    );

    return (
        <>
            {filterTypes}
        </>

    );
}

export default SearchFilter;