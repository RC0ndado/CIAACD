import React from 'react';
import Rutas from "./pages/routes";
import data from "../src/data.json";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Rutas properties={data.property} />
    </>
  );
}

export default App;
