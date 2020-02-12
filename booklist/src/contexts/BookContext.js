import React, { createContext, useState } from 'react';
import { uuid } from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rotfuss', id: 1},
    { title: 'the final empire', author: 'brandon sanderson', id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([{ title, author, id: uuid() }, ...books]);
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
