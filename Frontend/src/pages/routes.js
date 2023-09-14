import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import UserInfo from "../pages/userInfo";
import Index from "../pages/properties";
import Privacy from "../pages/privacy";
import ListingProperty from "../pages/listingProperty";
import Formulario from "./Formulario";

const Rutas = (props) => {
return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/userInfo" element={<UserInfo />} />
    <Route path="/propiedades" element={<Index />} />
    <Route path="/aviso-de-privacidad" element={<Privacy />} />
    <Route path="/propiedad/:id" element={<ListingProperty properties={props.properties} />} />
    <Route path="/prediccion" element={<Formulario/>} />
    </Routes>
);
};

export default Rutas;
