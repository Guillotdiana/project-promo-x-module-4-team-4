import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Landing.scss";

const Landing = () => {
  return (
    <div className="landingDiv">

        <h1 className="landingDiv_h1">Books4You</h1>

        <div className="landingDiv_buttons">
          <Link to="/crear"><button>Crear Proyecto</button></Link>
          <Link to="/proyectos"><button>Ver otros proyectos</button></Link>
        </div>

    </div>
  )
}

export default Landing