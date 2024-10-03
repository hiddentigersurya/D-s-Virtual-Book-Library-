import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title, author, or genre..."
        value={searchTerm}
        onChange={handleSearch}
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;
