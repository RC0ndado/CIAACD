import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import UserInfo from "./pages/userInfo";
import Index from "./pages/properties";
import Formulario from "./pages/Formulario";

function App() {
  return (
    <div className="">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/propiedades" element={<Index />} />

          <Route path="/iniciosesion" element={<Login />} />

          <Route path="/perfil" element={<UserInfo />} />

          {/*Sujeto a cambio de ruta por un modal*/}
          <Route path="/prediccion" element={<Formulario />} />

        </Routes>
    </div>
  );
}

export default App;
