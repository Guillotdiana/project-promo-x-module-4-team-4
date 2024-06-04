import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div>
      <Header/>
      <Link to="/crear"><button>Crear Proyecto</button></Link>
      <Footer/>
    </div>
  )
}

export default List