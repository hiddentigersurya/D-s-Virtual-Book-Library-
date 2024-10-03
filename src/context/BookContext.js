import React, { createContext, useState } from 'react';
import { booksData } from '../data';
import { toast } from 'react-toastify';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books] = useState(booksData);
  const [myLibrary, setMyLibrary] = useState([]);

  const addToLibrary = (book) => {
    const isAlreadyInLibrary = myLibrary.some((b) => b.id === book.id);

    if (!isAlreadyInLibrary) {
      setMyLibrary([...myLibrary, book]);
      toast.success(`${book.title} added to your library!`);
    } else {
      toast.info(`${book.title} is already in your library.`);
    }
  };

  const removeFromLibrary = (id) => {
    const bookToRemove = myLibrary.find((book) => book.id === id);
    setMyLibrary(myLibrary.filter((book) => book.id !== id));
    toast.warn(`${bookToRemove.title} removed from your library.`);
  };

  return (
    <BookContext.Provider value={{ books, myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </BookContext.Provider>
  );
};
