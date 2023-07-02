import React from 'react'
import logo from  '../assets/logo.png'
import { useContext } from 'react'
import AuthContext from '../auth/AuthContext'

function NavBar() {
    const {logout} = useContext(AuthContext);

    const handleLogout = () => {
        console.log("handleLogout")
        logout();
    }

    return(
        <> 
            <nav>
                <ul>
                    <li> <a href="/"> <img className="imagen-logo" src={logo}/></a></li>
                    <li><a href="/aboutus">Acerca de</a></li>
                    <li><a href="/instructions">Instrucciones</a></li>
                    <li><a href="/login">Iniciar Sesion</a></li>
                    <li> <a onClick= {handleLogout}>Logout</a></li>
                </ul>
            </nav> 


        </>
        
    )
}

export default NavBar