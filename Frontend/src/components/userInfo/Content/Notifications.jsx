import React from 'react';
import '../../../styles/default.css'; // Asegúrate de que la ruta sea correcta

function Notifications() {
  return (
    <div className="subir-propiedad">
      <div className="container">
        <div className="main">
          <form className="cbp-mc-form">
            <div className="cbp-mc-column">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Jonathan"
              />
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Doe"
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="jon@doe.com"
              />
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option>Choose a country</option>
                <option>France</option>
                <option>Italy</option>
                <option>Portugal</option>
              </select>
              <label htmlFor="bio">Biography</label>
              <textarea id="bio" name="bio"></textarea>
            </div>
            <div className="cbp-mc-column">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+351 999 999"
              />
              <label htmlFor="affiliations">Affiliations</label>
              <textarea id="affiliations" name="affiliations"></textarea>
              <label>Occupation</label>
              <select id="occupation" name="occupation">
                <option>Choose an occupation</option>
                <option>Web Designer</option>
                <option>Web Developer</option>
                <option>Hybrid</option>
              </select>
              <label htmlFor="cat_name">Cat's name</label>
              <input
                type="text"
                id="cat_name"
                name="cat_name"
                placeholder="Kitty"
              />
              <label htmlFor="gadget">Favorite Gadget</label>
              <input
                type="text"
                id="gadget"
                name="gadget"
                placeholder="Annoy-a-tron"
              />
            </div>
            <div className="cbp-mc-column">
              <label>Type of Talent</label>
              <select id="talent" name="talent">
                <option>Choose a talent</option>
                <option>Ninja silence</option>
                <option>Sumo power</option>
                <option>Samurai precision</option>
              </select>
              <label htmlFor="drink">Favorite Drink</label>
              <input
                type="text"
                id="drink"
                name="drink"
                placeholder="Green Tea"
              />
              <label htmlFor="power">Special power</label>
              <input
                type="text"
                id="power"
                name="power"
                placeholder="Anti-gravity"
              />
              <label htmlFor="weapon">Weapon of choice</label>
              <input
                type="text"
                id="weapon"
                name="weapon"
                placeholder="Lightsaber"
              />
              <label htmlFor="comments">Comments</label>
              <textarea id="comments" name="comments"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
