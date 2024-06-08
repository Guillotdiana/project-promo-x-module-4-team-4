// FavList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CardPreview from './CardPreview';

const FavList = ({ favBooks, removeFavBook }) => {
  return (
    <div>
      <Header />
      <div className='favlist__buttons'>
        <Link to="/crear"><button className='button--link'>Crear Proyecto</button></Link>
        <Link to="/proyectos"><button className='button--link'>Volver al listado</button></Link>
      </div>
      <h1 className='favlist'>Tus libros favoritos</h1>
      <div className='favlist__list'>
        {favBooks.map((book, index) => (
          <CardPreview
            key={index}
            userData={book}
            onLike={() => removeFavBook(book)}
            isLiked={true} // Siempre es "Unlike" en la lista de favoritos
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FavList;
