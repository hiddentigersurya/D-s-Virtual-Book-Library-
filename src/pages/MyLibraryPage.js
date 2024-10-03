import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useContext(BookContext);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 style={{ fontSize: '3.2rem', fontWeight: 'bold', color: 'white' }}>My Library</h1>
        <Link to="/" className="btn btn-info" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: 'white', fontSize: '1.2rem', padding: '0.5rem 1rem' }}>Home</Link>
      </div>
      {myLibrary.length === 0 ? (
        <p style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'white' }}>Your library is empty</p>
      ) : (
        myLibrary.map((book) => (
          <div key={book.id} className="library-item">
            <div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <button onClick={() => removeFromLibrary(book.id)} className="btn btn-danger">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyLibraryPage;
