import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import homeImage from "../assets/images/home.png";
import uaemLogo from "../assets/images/uaem.png";
import cincco from "../assets/images/cincco.png";
import posgrado from "../assets/images/posgrado.png";
import login from "../assets/images/login.png";
import loginIcon from "../assets/images/loginIcon.png";

import '../styles/pages/home.scss';

export default function Home() {

    const [isLogin, setIsLogin] = useState(false);
    let navigate = useNavigate();
    const password = "12345678";

    const handleLogin = () => {
      setIsLogin(!isLogin);
    };

    const handlePanel = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const pass = formData.get("pass");
      if (pass === password) {
        navigate("/panel");
      }  else {
        swal({
          title: "Datos incorrectos!",
          text: "tus datos de acceso son incorrectos",
          icon: "error",
        });
      }

    };

    const handleUser = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const idUser = formData.get("idUser");
      navigate(`/user/${idUser}`);
    };

    return(
        <>
          <div className="home">
            <div className="home__left-container">
              <div className="home__left-container-image">
                {
                  isLogin ? (
                    <img src={login} alt="logo"/>
                  ) : (
                    <img src={homeImage} alt="logo"/>
                  )
                }
              </div>
            </div>

            <div className="home__right-container">
              <div className="home__right-container-image">
                <img src={uaemLogo} alt="logo"/>
              </div>
              
              {
                isLogin ? (
                  <div className="home__right-container-formLogin">
                    <form onSubmit={handlePanel}>
                      <label className="home__right-container-formLogin-label">Login</label>
                      <div className="home__right-container-formLogin-image">
                        <img src={loginIcon} alt="logo"/>
                      </div>
                      <input
                        type="password"
                        name="pass"
                        placeholder="Ingresa tu clave"
                        required
                      />
                      <button type="submit">Entrar</button>
                    </form>
                    <p onClick={handleLogin}>INGRESAR AL INICIO</p>
                  </div>
                ) : (
                  <div className="home__right-container-form">
                    <form onSubmit={handleUser}>
                      <input type="text" name="idUser" placeholder="Ingresa tu ID"/>
                      <button type="submit">Iniciar</button>
                    </form>
                    <p onClick={handleLogin}>INGRESAR AL PANEL</p>
                  </div>
                )
              }

              <div className="home__right-container-banner">
                <div>
                  <img src={cincco} alt="logo"/>
                </div>
                <div>
                  <img src={posgrado} alt="logo"/>
                </div>
              </div>
            </div>

          </div>
        </>
    ); 
}