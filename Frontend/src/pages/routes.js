import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import UserInfo from "../pages/userInfo";
import Index from "../pages/properties";

const Rutas = () => {
return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/userInfo" element={<UserInfo />} />
    <Route path="/propiedades" element={<Index />} />
    </Routes>
);
};

export default Rutas;
