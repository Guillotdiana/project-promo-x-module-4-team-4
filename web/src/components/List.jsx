// List.js - Actualizamos la función addFavBook para verificar si el libro ya está en favoritos.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CardPreview from './CardPreview';
import image from "../images/Imagenlist.png";

const List = ({ userData, addFavBook, favBooks }) => {
  const [listBooks, setListBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/getBooks")
      .then((response) => response.json())
      .then(info => {
        setListBooks(info.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className='list__buttons'>
        <Link to="/crear"><button className='button--link'>Crear Tarjeta</button></Link>
        <Link to="/listafavoritos"><button className='button--link'>Mis favoritos</button></Link>
      </div>
      <div className='list-page'>
        <div className='cards-container'>
          {listBooks.map((book) => (
            <CardPreview
              key={book.id}
              userData={book}
              onLike={() => addFavBook(book)}
              isLiked={favBooks.some((favBook) => favBook.id === book.id)} // Verificar si ya está en favoritos
            />
          ))}
        </div>
        <img className='list-img' src={image} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default List;
