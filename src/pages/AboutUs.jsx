
import NavBar from '../components/Navbar'
import '../styles/AboutUs.css'

import avatar_alonso from "../../public/assets/img/AvatarAlonso.svg"
import avatar_manuel from "../../public/assets/AvatarMaker.png"

function AboutUs() {
    return(
        <>
        <NavBar/>

       
        <div className="team-section">
                
            <div className="title"> 
                <h1>SOBRE NOSOTROS</h1>
                <p> En esta sección encontraras información sobre los creadores
                        y desarrolladores del juego </p>
            </div>
                
            <div className="team-card">

                <div className="card">
                    <div className="image-section">
                        <img src={avatar_manuel}/>
                    </div>

                    <div className="content">
                        <h3 className="nombre-usuario"> Manuel Gana</h3>
                        <p className="description"> Carismatico ingeniero con ganas
                        de realizar juegos online para entretener personas en sus 
                        tiempos libres. Cualquier información buscar en linkedin </p>
                    </div>
                </div>
                    

                <div className="card">
                    <div className="image-section">
                        <img src={avatar_alonso}/>
                    </div>

                    <div className="content">
                        <h3 className="nombre-usuario"> Alonso Peralta</h3>
                        <p className="description"> Comprometido con sus objetivos, trabaja duro para alcanzarlos y se siente motivada por los desafíos. Además, disfruta de relacionarse con otros, estableciendo conexiones significativas y siendo una fuente de inspiración y motivación para su equipo.</p>
                    </div>
                </div>

            </div>

        </div>

        
        </>
    )
}
export default AboutUs