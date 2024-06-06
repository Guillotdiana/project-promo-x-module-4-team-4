import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CardPreview from './CardPreview'
import image from "../images/Imagenlist.jpg";

const List = ({userData, setFilterList}) => {
  
  const [listBooks, setListBooks, filterBook] = useState([])

  useEffect(() => {
    fetch("http://localhost:5001/getBooks")
    .then((response) => response.json())
    .then(info => {
      setListBooks(info.data)
    })
  }, [])

  const handleChange = (ev) =>{
    setFilterList(ev.target.value)
  }

  return (
    <div>
      <Header/>
      <div className='list__buttons'>
        <Link to="/crear"><button className='button--link'>Crear Tarjeta</button></Link>
        <Link to="/listaFavoritos"><button className='button--link'>Mis favoritos</button></Link>
      </div>
      <form action="">
      <select className="addForm__input " name="genre" id="genre" onChange={handleChange}  required>
          <option value="all">Selecciona el género literario</option >
          <option value="aventura">Aventura</option>
          <option value="autob">Autobiografía</option>
          <option value="biografia">Biografía</option>
          <option value="cienciaFiccion">Ciencia Ficción</option>
          <option value="comedia">Comedia</option>
          <option value="cuento">Cuento</option>
          <option value="distopia">Distopía</option>
          <option value="drama">Drama</option>
          <option value="ensayo">Ensayo</option>
          <option value="erotica">Erótica</option>
          <option value="epica">Épica</option>
          <option value="epistolar">Epistolar</option>
          <option value="fantasia">Fantasía</option>
          <option value="gastronomico">Gastronómico</option>
          <option value="historico">Histórico</option>
          <option value="infantil">Infantil</option>
          <option value="misterio">Misterio</option>
          <option value="novela">Novela</option>
          <option value="novelaGra">Novela Gráfica</option>
          <option value="onirico">Onírico</option>
          <option value="parodia">Parodia</option>
          <option value="poesia">Poesía</option>
          <option value="policiaco">Policíaco</option>
          <option value="realismoMagico">Realismo Mágico</option>
          <option value="romantico">Romántico</option>
          <option value="satirico">Satírico</option>
          <option value="teatro">Teatro</option>
          <option value="terror">Terror</option>
          <option value="tragedia">Tragedia</option>
          <option value="utopia">Utopía</option>
          <option value="viajes">Viajes</option>
          <option value="western">Western</option>
          <option value="xenoficcion">Xenoficción</option>
          <option value="zombie">Zombie</option>
          </select> 
      </form>
      <div className='list-page' >
        <div className='cards-container'>
          {listBooks.map((userData) => <CardPreview key={userData.id} userData={userData}/>)}
          
        </div>

      <img  className='list-img' src={image} alt="" /></div>
    
      <Footer/>
    </div>
  )
}

export default List