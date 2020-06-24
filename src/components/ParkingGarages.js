import React from 'react';
import SearchPlace from './SearchPlace';
import SearchFilter from './SearchFilter';
import ParkingGarageList from './ParkingGarageList';
import dataParkingGarageList from '../data/DataParkingGarageList';

function ParkingGarages() {
  return (
    <>
      <h1>Parking Garages</h1>
      <SearchPlace />
      <SearchFilter />
      <ParkingGarageList list={dataParkingGarageList} />
    </>
  );
}

export default ParkingGarages;