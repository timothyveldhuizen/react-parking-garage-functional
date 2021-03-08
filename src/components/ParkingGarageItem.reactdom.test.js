// https://reactjs.org/docs/testing-recipes.html

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ParkingGarageItem from "./ParkingGarageItem";

let container = null;


describe('render parking garage item', () => {
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
    
    it ('without a key and without a item prop', () => {
        act(() => {
            render(<ParkingGarageItem />, container);
        });
        expect(container.textContent).toBe('No data')
    });

    it ('with a key and with a item prop', () => {
        const item = { "parkingaddresstype": "F", "streetname": "Siem Heidenstraat", "housenumber": "6", "zipcode": "3077MS", "place": "Rotterdam", "province": "Zuid-Holland" }

        act(() => {
            render(<ParkingGarageItem key={0} item={item} />, container);
        });
        expect(container.querySelector('h1').textContent).toBe('Siem Heidenstraat 6')
        expect(container.querySelector('h2').textContent).toBe('3077MS Rotterdam')
        expect(container.querySelector('h3').textContent).toBe('Zuid-Holland')
        expect(container.querySelector('p').textContent).toBe('F')
    });
});
