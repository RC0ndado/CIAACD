import React from "react";
import Heading from "../common/Heading";
import { awards } from "../data/Data";
import "./awards.css";

const Awards = () => {
  return (
    <div className="awards">
      <section className='awards-section padding'>
        <div className='container'>
          <Heading title='Más de 178,000 usuarios felices siguen estando con nosotros, todos aman nuestros servicios.' subtitle='Logros' />

          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Awards;
