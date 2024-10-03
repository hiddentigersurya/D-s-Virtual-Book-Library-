import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import './BookCard.css'

const BookCard = ({ book }) => {
  const { addToLibrary } = useContext(BookContext);

  return (
    <div className="col-md-4 col-sm-6">
      <div className="book-card">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Rating: {book.rating}</p>
        <Link to={`/book/${book.id}`} className="btn btn-primary mb-2 link">View Details</Link>
        {/* <button className="btn btn-success mb-2" onClick={() => addToLibrary(book)}>Add to Library</button> */}
      </div>
    </div>
  );
};

export default BookCard;
