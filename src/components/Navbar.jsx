import React from 'react'
import logo from  '../../public/assets/logo.png'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../auth/AuthContext'

function NavBar() {
    const {token, logout} = useContext(AuthContext);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        console.log("handleLogout")
        logout();
    }

    // useEffect(() => {
    //     console.log('Token:', token);
    //     if (token) {
    //         console.log("cambiando a cerrar sesion");
    //         setIsLoggedIn(true); 
    //         console.log(isLoggedIn);
    //     } else {
    //         console.log("cambiando a iniciar sesion");
    //         setIsLoggedIn(false)
    //         console.log(isLoggedIn);

    //     }
        
    //   }, [token]);

    return(
        <> 
            <nav>
                <ul>
                    <li> <a href="/"> <img className="imagen-logo" src={logo}/></a></li>
                    <li><a href="/aboutus">Acerca de</a></li>
                    <li><a href="/instructions">Instrucciones</a></li>
                    <li><a href="/login">Iniciar Sesion</a></li>
                    <li> <a onClick= {handleLogout}>Logout</a></li>
                    {/* {isLoggedIn ? (<li> <a href="/login">Iniciar sesión</a> </li>) : 
                    (<li> <a onClick={handleLogout}>Cerrar sesión</a> </li>)
                    } */}
                    
                </ul>
            </nav> 


        </>
        
    )
}

export default NavBar