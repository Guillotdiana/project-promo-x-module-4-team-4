import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Landing.scss";
import logo from '../images/logo.png';
import landingImage from '../images/landing-plant.png';

const Landing = () => {
  return (
    <div className="landingDiv">

        {/* <h1 className="landingDiv_h1">Books4You</h1> */}
      

        <div className="logoDiv">
        <img src={logo} alt="Books4You Logo" className="logoDiv_logo"/>
        </div>
        <h6 className="landingDiv_subtitle">Crea tarjetas para compartir tus libros favoritos o encuentra recomendaciones de otros usuarios</h6>
        <div className='landing__button'>
          <Link to="/crear"><button className="landingDiv_buttons">Crear Tarjeta</button></Link>
          <Link to="/proyectos"><button className="landingDiv_buttons">Ver otros Libros</button></Link>
        </div>
      

        <div className="landingDiv_decoration">
        <img src={landingImage} alt="Imagen de decoración" className="landingDiv_decoration_img"/>
        </div>

    </div>
  )
}

export default Landing