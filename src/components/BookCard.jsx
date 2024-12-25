import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBookContext } from './BookContext';
function BookCard({ book }) {
    const { setClickedBook } = useBookContext();
    const imageClick = () => {
        const imageElement = document.getElementById(`image-${book.id}`);
        const cardElement = document.getElementById(`card-${book.id}`);
        setClickedBook(book)
        if (imageElement && cardElement) {
          imageElement.style.transition = 'all 0.5s ease';
          imageElement.style.filter = 'blur(5px)';
          imageElement.style.zIndex = '-10';
          
          setTimeout(() => {
            imageElement.style.filter = 'none';
            imageElement.style.zIndex = '10';
          }, 5000);
        }
      };
  return (
    <div  id={`card-${book.id}`} className="relative z-10 border rounded-lg h-72 shadow-md p-4">
      <img onClick={imageClick} id={`image-${book.id}`} src={book.image} alt={book.title} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-bold text-black bg-white w-fit rounded-lg px-1  mb-2">{book.title}</h2>
      <p className="text-gray-700  bg-white w-fit rounded-lg px-1 mb-2">Author: {book.author}</p>
      <Link
        to={`/book/${book.id}`}
        className="inline-block text-black bg-white w-fit rounded-lg px-1"
      >
        View Details
      </Link>
    </div>
  );
}

export default BookCard;
