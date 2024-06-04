import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import CardPreview from './CardPreview'
import image from "../images/Imagenlist.jpg";

const List = ({userData}) => {
  return (
    <div>
      <Header/>
      <Link to="/crear"><button>Crear Proyecto</button></Link>
      <div className='list-page' >
    

        <div className='cards-container'>
          <CardPreview userData={userData}/>
           <CardPreview userData={userData}/>
          <CardPreview userData={userData}/>
          <CardPreview userData={userData}/>
          <CardPreview userData={userData}/>
          <CardPreview userData={userData}/>
        </div>
        <img className='list-img'  src={image} alt="" />
   
      </div>
      <Footer/>
    </div>
  )
}

export default List