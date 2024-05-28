import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <Link to="/crear"><button>Crear Proyecto</button></Link>
        <Link to="/proyectos"><button>Ver otros proyectos</button></Link>

    </div>
  )
}

export default Landing