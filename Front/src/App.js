import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import UserInfo from "./pages/userInfo";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/iniciosesion" element={<Login />} />
        
        <Route path="/perfil" element={<UserInfo />}/>
      
      </Routes>
    </div>
  );
}

export default App;
