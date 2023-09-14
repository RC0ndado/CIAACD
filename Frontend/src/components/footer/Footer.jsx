import React from "react"
import { footer } from "../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>¿Tienes preguntas acerca de Minka?</h1>
              <p>Te ayudaremos a impulsar tus propiedades y su venta. </p>
            </div>
            <a href="mailto:minka@support.ai" className='btn5'>Contáctanos</a>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>¿Necesitas ayuda con algo?</h2>
              <p>Recibe actualizaciones, ofertas destacadas, tutoriales y descuentos enviados directamente a tu bandeja de entrada cada mes.</p>

              <div className='input flex'>
                <input type='text' placeholder='Email' />
                <button>Subscribirse</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Minka. Desarrollado por TaikoTeam</span>
      </div>
    </>
  )
}

export default Footer
