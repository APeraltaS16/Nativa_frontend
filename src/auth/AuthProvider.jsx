import { useState, useEffect } from "react";
import AuthContext  from "./AuthContext";


function AuthProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [playerId, setPlayerId] = useState(localStorage.getItem("playerId") || null);
    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token])

    useEffect(() => {
        localStorage.setItem("playerId", playerId);
    }, [playerId])

    function logout(){
        setToken(null);
        setPlayerId(null);
    }

    return(
        <AuthContext.Provider value={{token, setToken, playerId, setPlayerId, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;