import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CardPreview from './CardPreview'
import image from "../images/Imagenlist.png";

const List = ({addFavBook, favBooks}) => {
  
  const [listBooks, setListBooks] = useState([]);
  const [filterList, setFilterList] = useState("all");
  const [loaderList, setLoaderList] = useState(true);

  useEffect(() => {
    fetch(`https://project-promo-x-module-4-team-4.onrender.com/getBooks`)
    .then((response) => response.json())
    .then(info => {
      setLoaderList(false)
      setListBooks(info.data)
      console.log(info.data)
    })
  }, [])

  const handleChange = (ev) =>{
    setFilterList(ev.target.value)
  }

  const filterBook = listBooks.filter(book =>{
    if(filterList === "all"){
      return true
    }else{
      return book.genre === filterList
    }
  });

  const handleLike = (book) => {
    addFavBook(book);
  };

  return (
    <div>
      <Header/>
      <div className='list__buttons'>
        <Link to="/crear"><button className='button--link'>Crear tarjeta</button></Link>
        <Link to="/listaFavoritos"><button className='button--link'>Mis favoritos</button></Link>
      </div>
      <form className='list-form' action="">
      <select className='list-select' name="genre" id="genre" onChange={handleChange}   required>
          <option value="all">Selecciona el género literario</option >
          <option value="Aventura">Aventura</option>
          <option value="Autobiografía">Autobiografía</option>
          <option value="Biografía">Biografía</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
          <option value="Comedia">Comedia</option>
          <option value="Cuento">Cuento</option>
          <option value="Distopía">Distopía</option>
          <option value="Divulgación">Divulgación</option>
          <option value="Drama">Drama</option>
          <option value="Ensayo">Ensayo</option>
          <option value="Erótica">Erótica</option>
          <option value="Épica">Épica</option>
          <option value="Epistolar">Epistolar</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Gastronómico">Gastronómico</option>
          <option value="Histórico">Histórico</option>
          <option value="Infantil">Infantil</option>
          <option value="Misterio">Misterio</option>
          <option value="Novela">Novela</option>
          <option value="Novela Gráfica">Novela Gráfica</option>
          <option value="Onírico">Onírico</option>
          <option value="Parodia">Parodia</option>
          <option value="Poesía">Poesía</option>
          <option value="Policíaco">Policíaco</option>
          <option value="Realismo Mágico">Realismo Mágico</option>
          <option value="Romántico">Romántico</option>
          <option value="Satírico">Satírico</option>
          <option value="Teatro">Teatro</option>
          <option value="Terror">Terror</option>
          <option value="Tragedia">Tragedia</option>
          <option value="Utopía">Utopía</option>
          <option value="Viajes">Viajes</option>
          <option value="Western">Western</option>
          <option value="Xenoficción">Xenoficción</option>
          <option value="Zombie">Zombie</option>
          </select> 
      </form>
      <div className="loader-box">
          <div className={`loader-list ${!loaderList ? "hidden" : ""}`}></div>
        </div>
      <div className='list-page' >
      
        <div className='cards-container'>
          {filterBook.map((userData,i) => <CardPreview key={i}  onLike={handleLike} favBooks={favBooks}  userData={userData}/>)}
          
        </div>
        <div>
        <img className='list-img' src={image} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default List