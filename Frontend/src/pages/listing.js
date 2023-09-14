import React from 'react';
import '../styles/listing.css';

function Listing(props) {
  const { global, property, handleOnChange, handleOnChangeView } = props;

  const loopListing = () => {
    if (!property || property.length === 0) {
      return "Sorry, that search doesn't match any listing";
    }

    return property.map((listing) => {
      const isResponsiveView = global.view === 'resp';
      return (
        <div className={isResponsiveView ? 'col-lg-6' : 'col-md-3'} key={listing.id}>
          <div className="listing">
            <div className="listing-img">
              <span className="address">{listing.address}</span>
              <img alt={listing.type} src={`/img/${listing.image}`} />
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img" />
                </div>
                <div className="user-details">
                  <span className="user-name">Nina Smith</span>
                  <span className="post-date">05/05/2017</span>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-square-o" aria-hidden="true" />
                      <span>{listing.floorspace}{isResponsiveView ? ' m²' : ' ft²'}</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true" />
                      <span>{listing.beds}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-rent">
              <span className="rent">${listing.price}</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true" />
                {listing.area}
              </span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="listings">
      <section className="listing-heading">
        <h2 className="card-title">Short stay</h2>
        <input type="text" name="search" placeholder="search..." onChange={handleOnChange} />
        <hr />
      </section>

      <section className="listing-sort">
        <span className="results">{(global.filterData ? global.filterData.length : 0)} results found</span>
        <div className="listing-sortOptions">
          <select name="sortBy" className="sortby" onChange={handleOnChange}>
            <option value="price-dsc">Lowest Price</option>
            <option value="price-asc">Highest Price</option>
          </select>
          <div className="view">
            <i className="fa fa-th-list" aria-hidden="true" onClick={() => handleOnChangeView('resp')} />
            <i className="fa fa-th" aria-hidden="true" onClick={() => handleOnChangeView('grid')} />
          </div>
        </div>
      </section>

      <section className="listing-results">{loopListing()}</section>

      <section id="listing-pagination">
        <ul className="pagination-pages">
          <li className="prev">Prev</li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>...</li>
          <li className="next">Next</li>
        </ul>
      </section>
    </div>
  );
}

export default Listing;
