import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from '../components/BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  console.log(books);
  return books.length ? (
    <div className="book-list">
      <ul>
        {
          books.map((book) => (<BookDetails key={book.id} book={book} />))
        }
      </ul>
    </div>
  ) : (
      <div className="empty">No books to read. Hello free time 🙂</div >
    );
}

export default BookList;
