import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import './BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const { books, addToLibrary } = useContext(BookContext);
  const book = books.find((b) => b.id === parseInt(id));
  const navigate = useNavigate(); // Hook to manage navigation

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="container book-details">
      <img src={book.image} alt={book.title} className="img-fluid mb-3" style={{ maxHeight: '400px', objectFit: 'cover' }} />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>Publication Year: {book.publication_year}</p>

      <button className="btn btn-success mb-3" onClick={() => addToLibrary(book)}>
        Add to My Library
      </button>
      <br />
      {/* View Library Button */}
      <Link to="/mylibrary" className="btn btn-info mb-3">View Library</Link>
      <br />
      {/* Back Button */}
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default BookDetailsPage;
