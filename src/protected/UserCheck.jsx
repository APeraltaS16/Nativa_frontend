import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../auth/AuthContext";
import Login from "../pages/Login/Login"
import SearchGame from "../pages/SearchGame"
import API_URL from "../config"

function UserCheck() {
    let ingresado = false;
    const {token} = useContext(AuthContext);
    const [msg, setMsg] = useState("")

    const config = {
        'method' : 'get',
        'url': `${API_URL}/searchgame`,
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    };
    useEffect(() => {
        axios(config).then((response) => {
            console.log("Enviaste un token bueno y estas logeado");
            console.log(response);
            setMsg(response.data.message);
            ingresado = true;
        }).catch((error) => {
            console.log("Hubo un error, no estas logeado");
            console.log(error);
            setMsg(error.message);

        })
    }, [])

    return (
        <div>
          {/* {ingresado ? <SearchGame /> : <Login />} */}
          <SearchGame></SearchGame>
        </div>
      );
      
}

export default UserCheck