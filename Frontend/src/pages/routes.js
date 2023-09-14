import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import UserInfo from "../pages/userInfo";
import Index from "../pages/properties";
import Privacy from "../pages/privacy";

const Rutas = () => {
return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/userInfo" element={<UserInfo />} />
    <Route path="/propiedades" element={<Index />} />
    <Route path="/aviso-de-privacidad" element={<Privacy />} />
    </Routes>
);
};

export default Rutas;
