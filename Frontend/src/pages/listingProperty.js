import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/property.css';

function ListingProperty({ properties }) {
  const { id } = useParams();

  if (id) {
    // Render individual property details
    const singleProperty = properties.find(p => p.id.toString() === id);

    if (!singleProperty) return <div>Property not found</div>;
    console.log(singleProperty);
    return (
      <div className="property-container">
        <img className="property-image" src={`/img/${singleProperty.image}`} alt={singleProperty.type} />
        <div className="property-details">
        <table>
    <tbody>
        <tr><td>ID:</td><td>{singleProperty.id}</td></tr>
        <tr><td>Address:</td><td>{singleProperty.address}</td></tr>
        <tr><td>Area:</td><td>{singleProperty.area}</td></tr>
        <tr><td>City:</td><td>{singleProperty.city}</td></tr>
        <tr><td>Type:</td><td>{singleProperty.type}</td></tr>
        <tr><td>Floorspace:</td><td>{singleProperty.floorspace} ft²</td></tr>
        <tr><td>Beds:</td><td>{singleProperty.beds}</td></tr>
        <tr><td>Baths:</td><td>{singleProperty.baths}</td></tr>
        <tr><td>Price:</td><td>${singleProperty.price}</td></tr>
        <tr><td>Parking:</td><td>{singleProperty.parking}</td></tr>
        <tr>
          <td>Construction:</td>
          <td>{singleProperty.construction.join(", ")}</td>
        </tr>
    </tbody>
</table>
<button className="buy-button">Comprar</button>
        </div>
      </div>
    );
  } else {
    // Render list of properties
    return (
      <div className="listings">
        <section className="listing-heading">
          <h2>Propiedades</h2>
        </section>
        <section className="listing-content">
          {properties.map(property => (
            <Property key={property.id} property={property} />
          ))}
        </section>
      </div>
    );
  }
}

function Property({ property }) {
  return (
    <div className="property">
      <img src={`/img/${property.image}`} alt={property.type} />
      <div className="details">
        <h3>{property.address}</h3>
        <span>{property.city}, {property.state}</span>
        <span>{property.price} / mes</span>
        <span>{property.beds} habitaciones</span>
        <span>{property.floorspace} ft²</span>
      </div>
    </div>
  );
}

export default ListingProperty;
