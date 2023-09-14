import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/loginPage.css";
import { createUser, loginUser } from "../services/app";


function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const isRegisterActiveFromURL = location.search === "?register=true";
  const [isRegisterActive, setIsRegisterActive] = useState(isRegisterActiveFromURL);


  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();
  
    // Verificar si todos los campos están llenos
    if (!registrationData.name || !registrationData.email || !registrationData.password) {
      toast.error('Por favor, llena todos los campos.');
      return;
    }

    try {
      const response = await createUser(registrationData);
      console.log(response);

      if (response && response.status === 200) {
        toast.success('Registro exitoso.');
      }

      setRegistrationData({
        name: "",
        email: "",
        password: "",
      });
    }
    catch (error) {
      console.error("Error during registration:", error);
      toast.error('Error durante el registro. Inténtalo de nuevo.');
    }
  };
  
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await loginUser(loginData);
      if (response && response.email) {
        toast.success('Inicio de sesión exitoso.');
        navigate("/userInfo");
      } else {
        toast.error('Correo electrónico o contraseña incorrectos.');
      }
  
      setLoginData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error during login:", error);
      toast.error('Correo electrónico o contraseña incorrectos.');
    }
  };

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false);
  };

  return (
    <div className="login-page">
      <div
        className={`container ${isRegisterActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container register-container">
          <form action="#" onSubmit={handleRegistrationSubmit}>
            <h1>Regístrate.</h1>
            <input type="text" placeholder="Nombre" name="name" value={registrationData.name} onChange={handleInputChange}/>
            <input type="email" placeholder="Correo" name="email" value={registrationData.email} onChange={handleInputChange}/>
            <input type="password" placeholder="Contraseña" name="password" value={registrationData.password} onChange={handleInputChange}/>
            <button type="submit">Registrarme</button>
          </form>
        </div>

        <div className="form-container login-container">
          <form action="#" onSubmit={handleLoginSubmit}>
            <h1>Iniciar Sesión</h1>
            <input type="email" placeholder="Correo" name="email"
              value={loginData.email}
              onChange={handleLoginChange}/>
            <input type="password" placeholder="Contraseña" name="password"
              value={loginData.password}
              onChange={handleLoginChange}/>
            <button>Iniciar Sesión</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div
              className={`overlay-panel overlay-left ${
                isRegisterActive ? "active" : ""
              }`}
            >
              <h1 className="title">
                Bienvenido <br /> 
              </h1>
              <p>Si tienes una cuenta, <br/>inicia sesión</p>
              <button className="ghost" id="login" onClick={handleLoginClick}>
                Iniciar Sesión
                <i className="lni lni-arrow-left login"></i>
              </button>
            </div>
            <div
              className={`overlay-panel overlay-right ${
                isRegisterActive ? "" : "active"
              }`}
            >
              <h1 className="title">
                ¡Empieza <br /> ahora!
              </h1>
              <p>
                Si todavía no tienes una cuenta, 
                <br/>regístrate aquí
              </p>
              <button
                className="ghost"
                id="register"
                onClick={handleRegisterClick}
              >
                Regístrate
                <i className="lni lni-arrow-right register"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;