// https://reactjs.org/docs/testing-recipes.html

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ParkingGarages from "./components/ParkingGarages";

describe('render parking garages', () => {
    let container = null;
    
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    
    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('show search bar', () => {
        act(() => {
            render(<ParkingGarages />, container);
        })

        expect(container.querySelector('label[for="searchplace"]').textContent).toBe('Search place')
    })

    it('show search filter with F checked by default', () => {
        act(() => {
            render(<ParkingGarages />, container);
        });

        expect(container.querySelector('input[id="searchfilter-F"]:checked').value).toBe('F')
    });

    it('show number of results', async () => {
        const mockDataParkingGarageList =
            [{ "parkingaddressreferencetype": "I-O", "parkingaddressreference": "48", "parkingaddresstype": "F", "streetname": "Siem Heidenstraat", "housenumber": "6", "zipcode": "3077MS", "place": "Rotterdam", "province": "Zuid-Holland", "country": "Nederland", "telephonenumber": "14010" }
                , { "parkingaddressreferencetype": "I-O", "parkingaddressreference": "7", "parkingaddresstype": "F", "streetname": "Wilhelminasingel", "housenumber": "101", "place": "Weert", "province": "Limburg", "country": "Nederland" }];

        jest.spyOn(global, "fetch")
            .mockImplementation(() =>
                Promise.resolve({ json: () => Promise.resolve(mockDataParkingGarageList) })
            );

        await act(async () => {
            await render(<ParkingGarages />, container);
        });

        expect(container.querySelector('span').textContent).toBe('Number of results 2')

        // remove the mock to ensure tests are completely isolated  
        global.fetch.mockRestore();
    });
});
