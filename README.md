# React Parking Garage (functional components)

A example app using React functional components to search for parking garages in the Netherlands.

## Components

- ParkingGarages: contains the whole feature of filtering parking garages
- SearchPlace: contains input field to search for a parking garage by place
- SearchFilter: contains options to filter for parking garage
- ParkingGarageList: contains a list of parking garages
- ParkingGarageItem: contains parking garage information

## Data

- SearchPlace: dynamic data that changes over time (in this case user input)
- SearchFilter: dynamic data that changes over time (in this case user input)
- ParkingGarageList: static data from external source (json)
- ParkingGarageItem: static data from external source (json)

External source is open data from RDW containing parking garage information: [Open Data Parkeren: PARKEERADRES](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERADRES/ygq4-hh5q)

## Challenge

The challenge is to build with React functional components and React hooks with a correct component communication.
That means data flows down with props or data flows up with events between components.
And having the state / data in the correct components.

### Implementation

This is a refactoring from the class component implementation: [Parking Garage class components](https://github.com/timothyveldhuizen/react-parking-garage-class)