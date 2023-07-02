import React, { useState, useContext } from 'react';
import NavBar from '../../components/Navbar';
import axios from 'axios';
import AuthContext from '../../auth/AuthContext';
import API_URL from '../../config';


function Singup() {

    // const {token, setToken} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(email);
      console.log(password);
      console.log(username);
    //   enviar post a ruta login
      axios.post(`${API_URL}/singup`, {
        username,
        email,
        password
      }).then((response) => {
        console.log(response);
        // const access_token = response.data.access_token;
        // setToken(access_token);
  
      }).catch((error) => {
        console.log(error)
      })
    }
    return(
        <>
        <NavBar />
        <div className="login-container">
          <div className="login-form">
            <h2> Registrarse</h2>
            <form onSubmit={handleSubmit}>

              <div className="login-input">
              Username:
                <label>
                 <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                </label>
               
              </div>
              <div className="login-input">
                Email:
                <label>
                  <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required

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
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </>
    )
}

export default Singup

