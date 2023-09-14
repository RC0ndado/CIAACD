import React from 'react';
import '../../styles/filter.css';

function Filter(props) {
  const cities = () => {
    const citiesData = props.global.populateFormsData || {};
    const { cities } = citiesData;
    if (cities !== undefined) {
      return cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ));
    }
    return null;
  };

  const types = () => {
    const typesData = props.global.populateFormsData || {};
    const { types } = typesData;
    if (types !== undefined) {
      return types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ));
    }
    return null;
  };

  const beds = () => {
    const bedsData = props.global.populateFormsData || {};
    const { beds } = bedsData;
    if (beds !== undefined) {
      return beds.map((bed) => (
        <option key={bed} value={bed}>
          {bed}+ BR
        </option>
      ));
    }
    return null;
  };

  return (
    <div className="filters">
      <div className="inside">
        <h4 className="filter-title">Filter</h4>
        <label htmlFor="city">City</label>
        <select name="city" className="filters city" onChange={props.handleOnChange}>
          <option value="all">All</option>
          {cities()}
        </select>
        <label htmlFor="type">Home Type</label>
        <select name="type" className="filters type" onChange={props.handleOnChange}>
          <option value="all">All</option>
          {types()}
        </select>
        <label htmlFor="beds">Beds</label>
        <select name="beds" className="filters beds" onChange={props.handleOnChange}>
          {beds()}
        </select>
        <form>
          <div className="m-price">
            <label htmlFor="price">Price</label>
            <input
              name="min_price"
              value={props.global.min_price}
              onChange={props.handleOnChange}
              className="price"
            />
            <input
              name="max_price"
              value={props.global.max_price}
              onChange={props.handleOnChange}
              className="price"
            />
          </div>
          <div className="m-floorspace">
            <label htmlFor="floorspace">Floor Space</label>
            <input
              name="min_floorspace"
              value={props.global.min_floorspace}
              onChange={props.handleOnChange}
              className="floorspace"
            />
            <input
              name="max_floorspace"
              value={props.global.max_floorspace}
              onChange={props.handleOnChange}
              className="floorspace"
            />
          </div>
        </form>
        <div className="filters extras">
          <h4>Facilities</h4>
          <label htmlFor="elevator">
            <span>Elevator</span>
            <input
              name="elevator"
              value="elevator"
              type="checkbox"
              onChange={props.handleOnChange}
            />
          </label>
          <label htmlFor="garage">
            <span>Garage</span>
            <input
              name="garage"
              value="garage"
              type="checkbox"
              onChange={props.handleOnChange}
            />
          </label>
          <label htmlFor="basement">
            <span>Basement</span>
            <input
              name="basement"
              value="basement"
              type="checkbox"
              onChange={props.handleOnChange}
            />
          </label>
          <label htmlFor="landry">
            <span>Landry</span>
            <input
              name="landry"
              value="landry"
              type="checkbox"
              onChange={props.handleOnChange}
            />
          </label>
          <label htmlFor="gym">
            <span>Gym</span>
            <input
              name="gym"
              value="gym"
              type="checkbox"
              onChange={props.handleOnChange}
            />
          </label>
          <label htmlFor="fireplace">
            <span>Fireplace</span>
            <input
              name="fireplace"
              value="fireplace"
              type="checkbox"
              onChange={props.handleOnChange}
            />
          </label>
          <label htmlFor="pool">
            <span>Swimming pool</span>
            <input
              name="pool"
              value="pool"
              type="checkbox"
              onChange={props.handleOnChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;

