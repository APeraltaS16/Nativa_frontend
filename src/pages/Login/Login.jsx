import React, { useState, useContext, useEffect} from 'react';
import NavBar from '../../components/Navbar';
import './Login.css';
import axios from 'axios';
import AuthContext from '../../auth/AuthContext';



function Login() {
  const {token, setToken, setPlayerId, playerId} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(playerId); // Verificar el valor actualizado de playerId
  }, [playerId]);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    // enviar post a ruta login
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/authentication/login`, {
      email,
      password
    }).then((response) => {
      console.log(response);
      const access_token = response.data.access_token;
      const response_playerId = response.data.playerId;
      console.log(access_token, response_playerId);
      
      if (access_token && response_playerId) {
        setToken(access_token);
        setPlayerId(response_playerId);
      }
      // Acá puedo re-dirigir a algun componente si quiero
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
