// https://www.robinwieruch.de/react-testing-library
// https://testing-library.com/docs/react-testing-library/intro#tutorials
// https://testing-library.com/docs/queries/about#priority
// https://mswjs.io/docs/api/setup-server

import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import ParkingGarages from './components/ParkingGarages';

describe('render parking garages', () => {
    const mockDataParkingGarageList =
        [{ "parkingaddressreferencetype": "I-O", "parkingaddressreference": "48", "parkingaddresstype": "F", "streetname": "Siem Heidenstraat", "housenumber": "6", "zipcode": "3077MS", "place": "Rotterdam", "province": "Zuid-Holland", "country": "Nederland", "telephonenumber": "14010" }
            , { "parkingaddressreferencetype": "I-O", "parkingaddressreference": "7", "parkingaddresstype": "F", "streetname": "Wilhelminasingel", "housenumber": "101", "place": "Weert", "province": "Limburg", "country": "Nederland" }];

    const server = setupServer(
        rest.get('https://opendata.rdw.nl/resource/ygq4-hh5q.json', (req, res, ctx) => {
            return res(ctx.json(mockDataParkingGarageList))
        })
    )

    beforeAll(() => server.listen()); // establish API mocking before all tests
    afterEach(() => server.resetHandlers()) // Reset any request handlers that we may add during the tests, so they don't affect other tests.
    afterAll(() => server.close()); // clean up once the tests are done

    it('show search bar', () => {
        render(<ParkingGarages />);
        expect(screen.getByText('Search place')).toBeInTheDocument()
    })

    it('show search filter with F checked by default', () => {
        render(<ParkingGarages />);
        expect(screen.getByRole('checkbox', { name: /Feitelijk adres/g }).checked).toBe(true)
    });

    it('show number of results', async () => {
        render(<ParkingGarages />);
        expect(screen.getByText('Number of results 0')).toBeInTheDocument(); // initially when rendered
        expect(await screen.findByText('Number of results 2')).toBeInTheDocument(); // when use effect hook is successful
    });
});