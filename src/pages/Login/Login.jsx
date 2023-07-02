import React, { useState, useContext } from 'react';
import NavBar from '../../components/Navbar';
import './Login.css';
import axios from 'axios';
import AuthContext from '../../auth/AuthContext';
import API_URL from '../../config';


function Login() {
  const {token, setToken} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    // enviar post a ruta login
    axios.post(`${API_URL}/login`, {
      email,
      password
    }).then((response) => {
      console.log(response);
      const access_token = response.data.access_token;
      setToken(access_token);
    }).catch((error) => {
      console.log(error)
    })
  }

  return ( 
    <>
      <NavBar />
      <div className="login-container">
        <div className="login-form">
          <h2>Iniciar Sesion</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-input">
              Email:

              <label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </label>
            </div>

            <div className="login-input">
              Contraseña:
              <label>
               <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              </label>
             
            </div>
            <button type="submit" id="login-button">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
      <a href="/singup"> Registrarse</a>
    </>
  );
}

export default Login;
