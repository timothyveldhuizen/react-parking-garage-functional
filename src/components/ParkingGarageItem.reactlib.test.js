import React from 'react';
import { render, screen } from '@testing-library/react';
import ParkingGarageItem from './ParkingGarageItem';

describe('render parking garage item', () => {
    it ('without a key and without a item prop', () => {
        render(<ParkingGarageItem />);
        expect(screen.getByText('No data')).toBeInTheDocument();
    });

    it ('with a key and with a item prop', () => {
        const item = { "parkingaddresstype": "F", "streetname": "Siem Heidenstraat", "housenumber": "6", "zipcode": "3077MS", "place": "Rotterdam", "province": "Zuid-Holland" }
        render(<ParkingGarageItem key={0} item={item} />);
        expect(screen.getByText('Siem Heidenstraat 6')).toBeInTheDocument();
        expect(screen.getByText('3077MS Rotterdam')).toBeInTheDocument();
        expect(screen.getByText('Zuid-Holland')).toBeInTheDocument();
        expect(screen.getByText('F')).toBeInTheDocument();
    });

});