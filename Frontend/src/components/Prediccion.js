import React from "react";
import Modal from "react-modal";

const Prediccion = ({ isOpen, onClose, datos }) => {
    const obtenerPrediccion = () => {
      if (datos && datos.estimated_price) {
        const precioRedondeado = Math.round(datos.estimated_price * 100) / 100;
        return precioRedondeado.toFixed(2);
      } else {
        return "No se ha proporcionado una estimación de precio";
      }
    };
  
    return (
      <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Modal de Respuestas">
        <h2>Predicción del precio</h2>
        <div>
          <pre>$ {obtenerPrediccion()}</pre>
        </div>
        <br/>
        <button onClick={onClose}>Cerrar</button>
      </Modal>
    );
  };
  

export default Prediccion;
