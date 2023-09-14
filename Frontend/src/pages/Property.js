import React from 'react';
import "../styles/property.css";
import data from '../../src/data.json';
import { useParams } from 'react-router-dom';

const Property = () => {
    const { id } = useParams();
    const property = data.property.find(prop => prop.id === parseInt(id)) || {};

    return (
        <div className="property-container">
            <img src={`/img/${property.image}`} alt="Property" className="property-image" />
            <div className="property-details">
                <table>
                    <tbody>
                        <tr><td>Area</td><td>{property.area}</td></tr>
                        <tr><td>Address</td><td>{property.address}</td></tr>
                        <tr><td>City</td><td>{property.city}</td></tr>
                        <tr><td>Type</td><td>{property.type}</td></tr>
                        <tr><td>Floorspace</td><td>{property.floorspace} sqft</td></tr>
                        <tr><td>Beds</td><td>{property.beds}</td></tr>
                        <tr><td>Baths</td><td>{property.baths}</td></tr>
                        <tr><td>Price</td><td>${property.price.toLocaleString()}</td></tr>
                        <tr><td>Parking Spots</td><td>{property.parking}</td></tr>
                        <tr><td>Construction Features</td><td>{property.construction.join(', ')}</td></tr>
                    </tbody>
                </table>
                <button className="buy-button">Comprar</button>
            </div>
        </div>
    );
};

export default Property;
