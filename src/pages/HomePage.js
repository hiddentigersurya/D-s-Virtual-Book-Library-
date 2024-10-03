import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { books } = useContext(BookContext);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (searchTerm) => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 style={{ fontSize: '3.0rem', fontWeight: 'bold', color: 'white' }}>Virtual Book Library</h1>
        <Link to="/mylibrary" className="btn btn-info" style={{ backgroundColor: '#007bff', borderColor: '#007bff', color: 'white', fontSize: '1.2rem', padding: '0.5rem 1rem' }}>View Library</Link>
      </div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;
