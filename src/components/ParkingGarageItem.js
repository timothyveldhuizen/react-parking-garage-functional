import React from 'react';

function ParkingGarageItem(props) {
    return (
        <div>
            <h1>{props.item.streetname} {props.item.housenumber}</h1>
            <h2>{props.item.zipcode} {props.item.place}</h2>
            <h3>{props.item.province}</h3>
            <p>{props.item.parkingaddresstype}</p>
        </div>
    );
}

export default ParkingGarageItem;