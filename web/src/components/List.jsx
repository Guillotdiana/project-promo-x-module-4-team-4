import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CardPreview from './CardPreview';
import image from "../images/Imagenlist.png";

const List = ({ addFavBook }) => {

  const [listBooks, setListBooks] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5001/getBooks")
      .then((response) => response.json())
      .then(info => {
        setListBooks(info.data);
      });
  }, []);

  const handleLike = (book) => {
    addFavBook(book);
  };


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
            onLike={handleLike}
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
