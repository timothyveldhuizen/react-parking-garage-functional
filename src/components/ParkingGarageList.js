import React from 'react';
import ParkingGarageItem from './ParkingGarageItem';

function ParkingGarageList(props) {
    const listItems = props.list
        .map(item => {
            const listKey = item.parkingaddressreferencetype + item.parkingaddressreference + item.parkingaddresstype;
            return <ParkingGarageItem key={listKey} item={item} />
        }
        );

    return (
        <>
            <p>Parking Garages</p>
            <span>Number of results {listItems.length}</span>
            {listItems}
        </>
    );
}

export default ParkingGarageList;