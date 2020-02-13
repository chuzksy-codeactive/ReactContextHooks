import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();

    addBook(title, author);
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <input type="text"
        placeholder="book title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <input
        type="text"
        placeholder="author"
        required
        title={author}
        onChange={(e) => setAuthor(e.target.value)} />
      <input type="submit" value="add book" />
    </form>
  );
}

export default NewBookForm;
