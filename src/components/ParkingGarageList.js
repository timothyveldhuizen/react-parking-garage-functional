import React from 'react';
import ParkingGarageItem from './ParkingGarageItem';

function ParkingGarageList(props) {
    const listItems = props.list
        .filter(item => item.place ? item.place.toLowerCase().includes(props.place.toLowerCase()) : false)
        .filter(item => Object.values(props.filter).indexOf(true) > -1 ? props.filter[item.parkingaddresstype] : false)
        .map(item => {
            const listKey = Math.random().toString().substr(2, 8);
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