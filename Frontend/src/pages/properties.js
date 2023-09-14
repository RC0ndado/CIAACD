import React, { useState, useEffect } from 'react';
import Filter from '../components/propertiespage/filter';
import Listing from './listing'
import data from '../components/data.json';
import '../styles/filter.css';
import '../styles/listing.css';

function Index() {
  const [propertyData, setPropertyData] = useState(data.property);
  const [city, setCity] = useState('All');
  const [type, setType] = useState('All');
  const [beds, setBeds] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [minFloorspace, setMinFloorspace] = useState(0);
  const [maxFloorspace, setMaxFloorspace] = useState(10000);
  const [elevator, setElevator] = useState(false);
  const [garage, setGarage] = useState(false);
  const [basement, setBasement] = useState(false);
  const [gym, setGym] = useState(false);
  const [fireplace, setFireplace] = useState(false);
  const [pool, setPool] = useState(false);
  const [landry, setLandry] = useState(false);
  const [sortBy, setSortBy] = useState('price-dsc');
  const [view, setView] = useState('grid');
  const [search, setSearch] = useState('');
  const [populateFormsData, setPopulateFormsData] = useState({
    types: ['Condo', 'Duplex', 'Multi Family', 'Single Family', 'Studio', 'Townhouse'],
    beds: [1, 2, 3, 4],
    cities: ['Bronxville', 'Eastchester', 'Mamaroneck', 'New Rochelle', 'Scarsdale', 'White Plains'],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    populateForms();
  }, []); // Run once when component mounts

  useEffect(() => {
    filterData();
  });

  const handleOnChange = (event) => {
    const { name, value, checked } = event.target;
    switch (name) {
      case 'city':
        setCity(value);
        break;
      case 'type':
        setType(value);
        break;
      case 'beds':
        setBeds(value);
        break;
      case 'min_price':
        setMinPrice(value);
        break;
      case 'max_price':
        setMaxPrice(value);
        break;
      case 'min_floorspace':
        setMinFloorspace(value);
        break;
      case 'max_floorspace':
        setMaxFloorspace(value);
        break;
      case 'elevator':
        setElevator(checked);
        break;
      case 'garage':
        setGarage(checked);
        break;
      case 'basement':
        setBasement(checked);
        break;
      case 'gym':
        setGym(checked);
        break;
      case 'fireplace':
        setFireplace(checked);
        break;
      case 'pool':
        setPool(checked);
        break;
      case 'landry':
        setLandry(checked);
        break;
      case 'sortBy':
        setSortBy(value);
        break;
      case 'search':
        setSearch(value);
        break;
      default:
        break;
    }

    // Call filterData to apply filtering when any input field changes
    filterData();
  };

  const handleOnChangeView = (changeView) => (e) => {
    e.preventDefault();
    setView(changeView);
  };

  const filterData = () => {
    let filteredData = data.property.filter((property) => {
      const priceInRange =
        property.price >= minPrice && property.price <= maxPrice;
      const floorspaceInRange =
        property.floorspace >= minFloorspace &&
        property.floorspace <= maxFloorspace;
      const bedsMatch = property.beds >= beds;
      const cityMatch = city === 'All' || property.city === city;
      const typeMatch = type === 'All' || property.type === type;
      const constructionMatch =
        (!elevator || property.construction.includes('elevator')) &&
        (!basement || property.construction.includes('basement')) &&
        (!garage || property.construction.includes('garage')) &&
        (!gym || property.construction.includes('gym')) &&
        (!fireplace || property.construction.includes('fireplace')) &&
        (!pool || property.construction.includes('pool')) &&
        (!landry || property.construction.includes('landry'));

      const searchMatch =
        !search ||
        property.city.toLowerCase().includes(search.toLowerCase());

      return (
        priceInRange &&
        floorspaceInRange &&
        bedsMatch &&
        cityMatch &&
        typeMatch &&
        constructionMatch &&
        searchMatch
      );
    });

    if (sortBy === 'price-dsc') {
      filteredData = filteredData.sort((a, b) => a.price - b.price);
    }

    if (sortBy === 'price-asc') {
      filteredData = filteredData.sort((a, b) => b.price - a.price);
    }

    setPropertyData(filteredData);
  };

  const populateForms = () => {
    const cities = [...new Set(data.property.map((property) => property.city))].sort();
    const types = [...new Set(data.property.map((property) => property.type))].sort();
    const beds = [...new Set(data.property.map((property) => property.beds))].sort();
    setPopulateFormsData({
      types,
      beds,
      cities,
    });
    setLoading(false);
  };

  return (
    <div className="app">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <section className="container">
          <Filter
            property={data.property}
            handleOnChange={handleOnChange}
            global={{
              city,
              type,
              beds,
              min_price: minPrice,
              max_price: maxPrice,
              min_floorspace: minFloorspace,
              max_floorspace: maxFloorspace,
              elevator,
              garage,
              basement,
              gym,
              fireplace,
              pool,
              landry,
              sortBy,
              view,
              search,
            }}
            populateAction={populateFormsData}
          />
          <Listing
            property={propertyData}
            global={{
              city,
              type,
              beds,
              min_price: minPrice,
              max_price: maxPrice,
              min_floorspace: minFloorspace,
              max_floorspace: maxFloorspace,
              elevator,
              garage,
              basement,
              gym,
              fireplace,
              pool,
              landry,
              sortBy,
              view,
              search,
            }}
            handleOnChange={handleOnChange}
            handleOnChangeView={handleOnChangeView}
          />
        </section>
      )}
    </div>
  );
}

export default Index;
