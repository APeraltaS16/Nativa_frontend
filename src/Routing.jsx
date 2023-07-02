import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import AboutUs from "./pages/AboutUs"
import SearchGame from "./pages/SearchGame"
import Login from "./pages/Login/Login"
import Instructions from "./pages/Instructions/Instructions"
import Game from "./pages/Game/Game"
import UserCheck from "./protected/UserCheck"
import Singup from "./pages/Singup/Singup"


function Routing() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/aboutus'} element={<AboutUs/>}/>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/instructions'} element={<Instructions/>}/>
                <Route path={'/game'} element={<Game/>}/>
                <Route path={'/searchgame/:gameId'} element={<UserCheck/>}/>
                <Route path={'/singup'} element={<Singup/>}/>



            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing