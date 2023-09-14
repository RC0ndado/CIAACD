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
        <h4 className="filter-title">Filtros</h4>
        <label htmlFor="city">Ciudad</label>
        <select name="city" className="filters city" onChange={props.handleOnChange}>
          <option value="all">Todos</option>
          {cities()}
        </select>
        <label htmlFor="type">Tipo de Casa</label>
        <select name="type" className="filters type" onChange={props.handleOnChange}>
          <option value="all">Todo</option>
          {types()}
        </select>
        <label htmlFor="beds">Beds</label>
        <select name="beds" className="filters beds" onChange={props.handleOnChange}>
          {beds()}
        </select>
        <form>
          <div className="m-price">
            <label htmlFor="price">Precio</label>
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
            <label htmlFor="floorspace">Metros cuadrados</label>
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
          <h4>Facilidades</h4>
          <label htmlFor="elevator">
            <span>Elevador</span>
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
            <span>Sótano</span>
            <input
              name="basement"
              value="basement"
              type="checkbox"
              onChange={props.handleOnChange}
            />
          </label>
          <label htmlFor="landry">
            <span>Landería</span>
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
            <span>Extintor</span>
            <input
              name="fireplace"
              value="fireplace"
              type="checkbox"
              onChange={props.handleOnChange}
            />
          </label>
          <label htmlFor="pool">
            <span>Alberca</span>
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

