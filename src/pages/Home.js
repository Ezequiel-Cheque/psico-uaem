import React, { useState } from "react";

import homeImage from "../assets/images/home.png";
import uaemLogo from "../assets/images/uaem.png";
import cincco from "../assets/images/cincco.png";
import posgrado from "../assets/images/posgrado.png";
import login from "../assets/images/login.png";
import loginIcon from "../assets/images/loginIcon.png";


export default function Home() {

    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
      setIsLogin(!isLogin);
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
                    <label className="home__right-container-formLogin-label">Login</label>
                    <div className="home__right-container-formLogin-image">
                      <img src={loginIcon} alt="logo"/>
                    </div>
                    <input type="text" placeholder="Ingresa tu clave"/>
                    <button>Entrar</button>
                    <p onClick={handleLogin}>INGRESAR AL INICIO</p>
                  </div>
                ) : (
                  <div className="home__right-container-form">
                    <input type="text" placeholder="Ingresa tu ID"/>
                    <button>Iniciar</button>
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