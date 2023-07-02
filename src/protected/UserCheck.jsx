import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../auth/AuthContext";
import Login from "../pages/Login/Login"
import SearchGame from "../pages/SearchGame"
import { useParams } from 'react-router-dom';

function UserCheck() {
    const [ingresado, setIngresado] = useState(false);
    const {token, playerId} = useContext(AuthContext);
    const [msg, setMsg] = useState("")
    const { gameId } = useParams();

    const config = {
        'method' : 'post',
        'url': `${import.meta.env.VITE_BACKEND_URL}/players/ready`,
        // 'url': `${import.meta.env.VITE_BACKEND_URL}/scope/protecteduser`,
        'headers': {
            'Authorization': `Bearer ${token}`
        },
        'data': {
            userid: playerId,
            gameid: gameId
          }
    };

    useEffect(() => {
        axios(config).then((response) => {
            console.log("Enviaste un token bueno y estas logeado");
            console.log(response);
            if (response.data.response) {
                setIngresado(true)
            }
            setMsg(response.data.message);
            
        }).catch((error) => {
            console.log("Hubo un error, no estas logeado");
            setMsg(error.message);
        })
    }, [])

    return (
        <div>
            {msg}
            {ingresado ? <SearchGame /> : <Login />}
            {/* <SearchGame></SearchGame> */}
        </div>
      );
      
}

export default UserCheck