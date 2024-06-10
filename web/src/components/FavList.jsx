import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CardPreview from './CardPreview';
import image from "../images/image-favs.png";

const FavList = ({ favBooks }) => {
  return (
    <div>
      <Header />
      <div className='favlist__buttons'>
        <Link to="/crear"><button className='button--link'>Crear Proyecto</button></Link>
        <Link to="/proyectos"><button className='button--link'>Volver al listado</button></Link>
      </div>
      <h1 className='favlist'>Tus libros favoritos</h1>
      <div className="favlist-container">
        <img className='list-img' src={image} alt="" />
        <div className='favlist__list'>
          {favBooks.map((book, index) => (
            <CardPreview key={index} userData={book} />
          ))}
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default FavList;
