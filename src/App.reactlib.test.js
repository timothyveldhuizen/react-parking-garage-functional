// https://www.robinwieruch.de/react-testing-library
// https://testing-library.com/docs/react-testing-library/intro#tutorials
// https://testing-library.com/docs/queries/about#priority

import React from 'react';
import { render, screen } from '@testing-library/react';
import ParkingGarages from './components/ParkingGarages';

describe('render parking garages', () => {
    it('show search bar', () => {
        render(<ParkingGarages />);
        expect(screen.getByText('Search place')).toBeInTheDocument()
    })

    fit('show search filter with F checked by default', () => {
        render(<ParkingGarages />);
        expect(screen.getByRole('checkbox', {name: /searchfilter-F/g})).toBe('F')
    });

    it('show number of results', () => {
        const mockDataParkingGarageList =
            [{ "parkingaddressreferencetype": "I-O", "parkingaddressreference": "48", "parkingaddresstype": "F", "streetname": "Siem Heidenstraat", "housenumber": "6", "zipcode": "3077MS", "place": "Rotterdam", "province": "Zuid-Holland", "country": "Nederland", "telephonenumber": "14010" }
                , { "parkingaddressreferencetype": "I-O", "parkingaddressreference": "7", "parkingaddresstype": "F", "streetname": "Wilhelminasingel", "housenumber": "101", "place": "Weert", "province": "Limburg", "country": "Nederland" }];

        jest.spyOn(global, "fetch")
            .mockImplementation(() =>
                Promise.resolve({ json: () => Promise.resolve(mockDataParkingGarageList) })
            );

        render(<ParkingGarages />);
        expect(screen.querySelector('span').textContent).toBe('Number of results 2')

        // remove the mock to ensure tests are completely isolated  
        global.fetch.mockRestore();
    });
});