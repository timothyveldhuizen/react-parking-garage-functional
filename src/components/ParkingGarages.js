import React, { useState } from 'react';
import SearchPlace from './SearchPlace';
import SearchFilter from './SearchFilter';
import ParkingGarageList from './ParkingGarageList';
import dataParkingGarageList from '../data/DataParkingGarageList';

function ParkingGarages() {
  const [searchPlace, setSearchPlace] = useState('')
  const [searchFilter, setSearchFilter] = useState({
    A: false,
    P: false,
    F: true,
  })

  function handleSearchFilterChange(filterItem, checked) {
    const currentFilter = searchFilter;
    const item = { [filterItem]: checked};
    // to force a rerender have an empty {} object and merge into empty object the 2 sources: currentFilter and item
    setSearchFilter(Object.assign({}, currentFilter, item))
  }

  return (
    <>
      <h1>Parking Garages</h1>
      <SearchPlace searchInput={searchPlace} onSearchInputChange={setSearchPlace} />
      <SearchFilter searchFilter={searchFilter} onSearchFilterChange={handleSearchFilterChange}/>
      <ParkingGarageList place={searchPlace} filter={searchFilter} list={dataParkingGarageList} />
    </>
  );
}

export default ParkingGarages;